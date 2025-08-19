// components/LaptopVideoFrame.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { defaultViewport } from '@/lib/animations/variants';

type Insets = {
    top: string; right: string; bottom: string; left: string;
};

type Props = {
    /** Laptop frame image with transparent screen area */
    frameSrc: string;
    /** Video src */
    videoSrc: string;
    /** Natural width/height of the frame image (for aspect & sizing) */
    frameWidth: number;
    frameHeight: number;
    /** Percentage insets for the screen area (mobile-first) */
    screenInsets: Insets;
    /** Optional overrides at md+ (if the artwork shifts slightly) */
    screenInsetsMd?: Partial<Insets>;
    alt?: string;
    className?: string;
    /** Motion props toggle */
    enableHover?: boolean;
};

export default function LaptopVideoFrame({
    frameSrc,
    videoSrc,
    frameWidth,
    frameHeight,
    screenInsets,
    screenInsetsMd,
    alt = 'Laptop frame',
    className = '',
    enableHover = true,
}: Props) {
    // Merge responsive insets (mobile-first, with md overrides)
    const md = {
        top: screenInsetsMd?.top ?? screenInsets.top,
        right: screenInsetsMd?.right ?? screenInsets.right,
        bottom: screenInsetsMd?.bottom ?? screenInsets.bottom,
        left: screenInsetsMd?.left ?? screenInsets.left,
    };

    return (
        <motion.div
            className={`relative rounded-2xl ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={enableHover ? { scale: 1.02, transition: { duration: 0.3 } } : undefined}
        >
            {/* 
        1) Intrinsic-size box to maintain the frame's aspect ratio responsively.
           We use a "padding-top" trick derived from the frame's natural aspect.
      */}
            <div
                className="relative w-full"
                style={{
                    paddingTop: `${(frameHeight / frameWidth) * 100}%`, // keep the aspect ratio
                }}
            >


                {/* 3) The laptop frame (with transparent screen area) goes on top */}
                <Image
                    src={frameSrc}
                    alt={alt}
                    fill
                    sizes="(min-width:1024px) 680px, 100vw"
                    className="pointer-events-none select-none"
                    priority={false}
                />

                {/* 2) Video sits *under* the frame, clipped by the transparent screen */}
                <motion.div
                    className="absolute"
                    style={{
                        // mobile-first insets
                        top: screenInsets.top,
                        right: screenInsets.right,
                        bottom: screenInsets.bottom,
                        left: screenInsets.left,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.6,
                            delay: 0.8,
                            type: "spring",
                            stiffness: 120,
                        },
                    }}
                    viewport={defaultViewport}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full max-w-[95%] h-[100%] rounded-lg object-fill"
                        aria-label="Promotional video"
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>

            {/* Responsive (md+) overrides for the screen insets via a tiny inline style block */}
            <style jsx>{`
        @media (min-width: 768px) {
          .${className.split(' ').join('.')} > div > div:first-child {
            top: ${md.top};
            right: ${md.right};
            bottom: ${md.bottom};
            left: ${md.left};
          }
        }
      `}</style>
        </motion.div>
    );
}
