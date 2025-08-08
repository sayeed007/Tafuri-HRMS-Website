// components/HeroSection.tsx
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    return (
        <section className="relative bg-hero-gradient overflow-hidden px-10 md:px-20">
            <div className="flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-black leading-tight mb-6">
                    Transform your business
                    <br />
                    with AI-powered{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                        #TAFURIHR
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-grey-2 mb-4">
                    Take the Hassle Out of HR- Automate, Manage, and Grow
                </p>

                <Button
                    size="lg"
                    className="bg-button-gradient hover:bg-button-gradient-hover text-white px-12 py-8 rounded-full text-lg font-semibold mb-8"
                >
                    Request Demo
                </Button>

                {/* Promo Video */}
                <div className="relative lg:ml-8 w-9/10 h-[550px] rounded-lg overflow-hidden mb-6">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        // poster="/images/video-poster.jpg" // Optional: Add a poster image
                        preload="metadata"
                        aria-hidden="true"
                    >
                        <source src="/videos/Tafurihrms_promo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}