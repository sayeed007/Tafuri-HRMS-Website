// components/AnimatedKioskCard.tsx
import Image from 'next/image'

export default function AnimatedKioskCard() {
    return (
        <div className="h-[330px] mx-20 rounded-4xl bg-[url('/icons/KioskCardBG.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative rounded-4xl overflow-hidden shadow-2xl min-h-[330px] flex items-center">
                {/* Main Content */}
                <div className="relative z-10 flex-1 p-8 lg:p-12">
                    <h2 className="text-white text-4xl lg:text-3xl font-bold leading-tight mb-6">
                        Use our Tafuri HRMS Integrated Kiosk<br />
                        to make your office hassle-free and<br />
                        more efficient.
                    </h2>

                    <button
                        className="text-white font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all duration-300 text-lg">
                        Learn More
                    </button>
                </div>

                {/* Animated Kiosk Container */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-1/4 overflow-hidden">
                    {/* Sliding Background */}
                    <div className="absolute inset-0 animate-slide-in-out backdrop-blur-70 bg-[url('/icons/KioskCardImageBG.png')] bg-cover bg-center bg-no-repeat"></div>

                    {/* Kiosk Image */}
                    <div className="absolute right-4 top-[300px] -translate-y-1/2 animate-slide-in-out">
                        <Image
                            src={'/icons/Kiosk.png'}
                            alt={'Kiosk'}
                            width={200}
                            height={200}
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}