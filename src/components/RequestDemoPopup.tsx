'use client';

import { RequestDemoPopupImageURL } from '@/data/imageData/RequestDemoPopup';
import {
    containerVariants,
    fadeInLeft,
    fadeInRight,
    hoverLift,
    hoverScale,
    iconHover,
    popupContainerVariants,
    scaleIn,
    tapScale
} from '@/lib/animations/variants';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const LOCAL_STORAGE_KEY = 'hr-popup-seen';

const RequestDemoPopup: React.FC = () => {
    const router = useRouter();
    const [shouldShow, setShouldShow] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        try {
            const hasSeenPopup = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (!hasSeenPopup) {
                setShouldShow(true);
                // Move focus to the first button when popup shows
                setTimeout(() => {
                    firstFocusableRef.current?.focus();
                }, 300); // Delay focus to allow animation to complete
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && shouldShow) {
                handleClose();
            }
        };

        // Trap focus within the popup
        const handleTabKey = (event: KeyboardEvent) => {
            if (!shouldShow || !dialogRef.current) return;

            const focusableElements = dialogRef.current.querySelectorAll(
                'button, [href], [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.key === 'Tab') {
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keydown', handleTabKey);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keydown', handleTabKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldShow]);

    const handleClose = () => {
        setShouldShow(false);
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
        } catch (error) {
            console.error('Error setting localStorage:', error);
        }
    };

    const handleRequestDemo = () => {
        router.push('/request-demo');
        handleClose(); // Close popup and mark as seen before navigation
    };

    return (
        <div
            className={`w-full fixed inset-0 bg-[rgba(8,7,8,0.3)] flex items-center justify-center p-4 transition-all duration-200 ${shouldShow ? 'z-50 opacity-100 pointer-events-auto' : '-z-10 opacity-0 pointer-events-none'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            aria-hidden={!shouldShow}
            ref={dialogRef}
        >
            {/* <AnimatePresence mode="wait"> */}
            {shouldShow && (
                <motion.div
                    className="bg-footer-gradient rounded-2xl max-w-6xl w-9/10 mx-auto max-h-[90vh] overflow-y-auto shadow-2xl relative"
                    variants={popupContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.button
                        onClick={handleClose}
                        className="cursor-pointer absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors group"
                        aria-label="Close popup"
                        variants={scaleIn}
                        whileHover={iconHover}
                        whileTap={tapScale}
                    >
                        <X className="w-6 h-6 text-grey-2 group-hover:text-gray-800" />
                    </motion.button>

                    <div className="flex flex-col lg:flex-row min-h-[500px]">
                        <motion.div
                            className="flex-1 p-8 lg:p-12 flex flex-col justify-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="max-w-lg">
                                <motion.h1
                                    className="text-4xl lg:text-5xl font-bold font-merriweather text-black leading-tight mb-1"
                                    variants={fadeInLeft}
                                >
                                    Easy-to-Track HR
                                </motion.h1>
                                <motion.h1
                                    className="text-4xl lg:text-5xl font-bold font-merriweather text-black leading-tight mb-1"
                                    variants={fadeInLeft}
                                >
                                    Solution That Works
                                </motion.h1>
                                <motion.h1
                                    className="text-4xl lg:text-5xl font-bold font-merriweather text-black leading-tight mb-1"
                                    variants={fadeInLeft}
                                >
                                    the Way You Do
                                </motion.h1>

                                <motion.p
                                    className="text-2xl text-black mb-8 leading-relaxed"
                                    variants={fadeInLeft}
                                >
                                    See how Tafuri HR reduces administrative and repetitive tasks
                                </motion.p>

                                <motion.div variants={fadeInLeft}>
                                    <Link href="/request-demo" passHref>
                                        <motion.button
                                            ref={firstFocusableRef}
                                            onClick={handleRequestDemo}
                                            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                                            whileHover={hoverLift}
                                            whileTap={tapScale}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            Request Demo
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="hidden md:flex flex-1 relative px-10 py-4 items-center justify-center">
                            <Image
                                src="/icons/RequestDemoPopupLight-min.webp"
                                alt="Request Demo Popup"
                                width={500}
                                height={250}
                                priority={true}
                                fetchPriority="high"
                                placeholder="blur"
                                blurDataURL={RequestDemoPopupImageURL}
                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 500px, 500px"
                                className="shadow-request-demo max-w-full"
                                quality={30}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
            {/* </AnimatePresence> */}
        </div>
    );
};

export default RequestDemoPopup;