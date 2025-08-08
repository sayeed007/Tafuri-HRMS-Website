// components/CoreHRSection.tsx

import Image from "next/image"

const features = [
    'A scalable employee information platform.',
    'Streamlined handling of employee cases.',
    'Smart HR process workflows.',
    'Simplified support ticket management for smooth service.',
    'Advanced and insightful analytics',
]

export default function CoreHRSection() {
    return (
        <section className="py-10 mx-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-black mb-6 leading-tight">
                        Streamlined Core HR
                    </h2>

                    <p className="text-base text-grey-3 mb-8 leading-relaxed">
                        Core HR, Redefined: Streamlining essential HR tasks with simplicity and efficiency, empowering teams to focus on people, not paperwork.
                    </p>

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

                {/* Right Content - Multiple Design Options */}
                <div className="relative">
                    {/* Option 1: Background Image with Content Overlay */}
                    <div
                        className="relative h-96 lg:h-[480px] bg-[url('/icons/CoreHRBG.png')] bg-contain bg-center bg-no-repeat rounded-2xl"
                    >
                        {/* Content overlay */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                            <Image
                                src={'/icons/CoreHRImage.png'}
                                alt={'CoreHRImage'}
                                width={1280}
                                height={600}
                                className="absolute w-[680px] top-[75px] right-[55px] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}