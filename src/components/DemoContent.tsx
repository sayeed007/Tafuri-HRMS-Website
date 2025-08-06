// components/DemoContent.tsx

import Image from "next/image";

export default function DemoContent() {

    const demoIncluded = [
        'Hands-on demo with live guidance',
        'Learn how TafuriHR can improve employee management',
        'Helping you make the right plan choice'
    ];

    return (
        <div className="lg:w-1/2 lg:pr-12">
            {/* Main Heading */}
            <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-black leading-tight">
                    Find your ideal match with{' '}
                    <span className="text-primary">TafuriHR.</span>
                </h2>
            </div>

            {/* Description */}
            <p className="text-black font-proxima text-xl mb-8 leading-relaxed">
                From onboarding to offboarding, Tafuri Hr brings your
                HR workflow together in one intuitive hub.
            </p>

            {/* What's included in the demo */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-black mb-6">
                    {`What's included in the demo?`}
                </h3>
                <div className="space-y-4">
                    {demoIncluded.map((demo) => (
                        <div className="flex items-center space-x-3" key={demo}>
                            <Image
                                src={'/icons/BlueCheck.png'}
                                alt={'BlueCheck'}
                                width={32}
                                height={32}
                            />
                            <span className="text-gray-700">
                                {demo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key partners */}
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Key partners in our journey
                </h3>
                <div className="flex flex-wrap items-center gap-6 opacity-60">
                    {/* CAROUSEL WILL BE HERE */}
                </div>
            </div>
        </div>
    )
}