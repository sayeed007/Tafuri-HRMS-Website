// components/MadeForAllSection.tsx
import Image from 'next/image'

const features = [
    'Easily request for manual attendance, apply for leave, view and download pay slip.',
    'Approve leaves and monitor team performance.',
    'Get accurate payroll data, tax calculations, and salary reports in one place.',
    'View shift schedules, track attendance.',
    'Access holiday calendars and ensure smooth workforce planning.'
]

export default function MadeForAllSection() {
    return (
        <section className="px-5 md:px-20 py-5">
            <div className="grid lg:grid-cols-2  gap-6 md:gap-16 items-center">
                {/* Left Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center overflow-x-clip">
                    <div className="relative w-[330px] max-w-full h-[350px] ">
                        <Image
                            src={'/icons/MadeForAllBG.png'}
                            alt={'MadeForAll'}
                            fill
                            sizes="330px"
                            className="absolute inset-0"
                        />
                        <div className='w-[149px] h-[350px] bg-white absolute inset-0 left-[91px] top-[0px] rounded-[20px] border-2 border-black'>
                            <video
                                width={350}
                                height={350}
                                autoPlay
                                loop
                                muted
                                className="object-cover opacity-80 w-[149px] h-[350px] rounded-[20px]"
                            >
                                <source src="/videos/MadeForAll.mp4" type="video/mp4" />
                            </video>
                        </div>

                    </div>
                </div>


                {/* Right Content - Multiple Design Options */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-black mb-6 leading-tight">
                        Made for all, not only HR
                    </h2>

                    {/* Feature List */}
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4 py-2">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5">
                                    <Image
                                        src={'/icons/CoreHRPoint.png'}
                                        alt={'CoreHRPoint'}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <span className="text-black text-base font-semibold leading-relaxed">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}