// components/FeaturesSection.tsx
import Image from 'next/image'

const features = [
    {
        icon: '/gif/Customization.gif',
        width: 160,
        height: 100,
        title: 'Customization',
        description: 'Configure the features based on your organizational requirements or request one.',
    },
    {
        icon: '/gif/TrainingAndImplementation.gif',
        width: 138,
        height: 138,
        title: 'Training & Implementation',
        description: 'Boost HRM efficiency with concise training and seamless support, ensuring quick adoption and effective use.',
    },
    {
        icon: '/gif/TechnicalSupport.gif',
        width: 114,
        height: 114,
        title: 'Technical Support',
        description: `Tech glitches? We've got your back.Fast, reliable support for seamless operations.`,
    }
]

export default function FeaturesSection() {
    return (
        <section className="px-5 md:px-20 py-10">
            <div className="flex flex-wrap justify-evenly gap-8 lg:gap-12">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col p-4 rounded-2xl items-center justify-start group md:w-[320px] h-[315px] bg-white shadow-elevation-4">
                            <div className='h-[160px] w-full flex items-center justify-center'>
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={feature.width}
                                    height={feature.height}
                                    // Inline style avoids Tailwind's JIT limitations for dynamic arbitrary values
                                    style={{ width: feature.width, height: feature.height }}
                                    className={`object-contain`}
                                    unoptimized
                                />
                            </div>

                            {/* Content Container - Consistent spacing */}
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-xl font-bold text-black mb-2 flex items-center">
                                    {feature.title}
                                </h3>

                                <p className="text-grey-2 leading-relaxed text-center text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

