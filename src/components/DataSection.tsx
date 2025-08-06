// components/DataSection.tsx

import Image from "next/image"
import DailyAttendanceCard from '@/components/DailyAttendanceCard'
import EmployeePerformanceCard from '@/components/EmployeePerformanceCard'
import EmployeeGrowthCard from '@/components/EmployeeGrowthCard'

const features = [
    'Track employee performance with metrics like KPIs, ratings, and progress',
    'Visualize employee satisfaction with survey results.',
    'Visualize employee goal achievement rates.',
    'Track feedback scores over the probation period to assess job confirmation readiness.',
]

export default function DataSection() {
    return (
        <section className="py-10 mx-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                        Empower Decision-Making with Data
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
                                <span className="text-black text-base font-semibold leading-relaxed">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Multiple Design Options */}
                <div className="relative">
                    {/* Option 1: Background Image with Content Overlay */}
                    <div
                        className="relative h-96 lg:h-[500px] bg-[url('/icons/DataSectionBG.png')] bg-contain bg-center bg-no-repeat rounded-2xl"
                    >
                        {/* Content overlay */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                            <DailyAttendanceCard />
                            <EmployeePerformanceCard />
                            <EmployeeGrowthCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}