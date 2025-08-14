import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FeaturesGrid() {
    const features = [
        {
            icon: '/icons/Calendar.png',
            title: "Clear Insights",
            description: "Provides clear insights into employee absences and attendance patterns."
        },
        {
            icon: '/icons/Clock.png',
            title: "Overtime Tracking",
            description: "Tracks and analyzes employee overtime efficiently."
        },
        {
            icon: '/icons/PayrollManagement.png',
            title: "Payroll Integration",
            description: "Simplifies and automates payroll calculations."
        },
        {
            icon: '/icons/TrackEmployee.png',
            title: "Location Tracking",
            description: "Tracks employee attendance seamlessly from any location."
        }
    ];

    return (
        <section
            className="w-full pb-12 bg-body-gradient px-5 md:px-20"
            aria-labelledby="features-section"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                    return (
                        <Card key={index} className="bg-white rounded-2xl text-center p-6 border-0 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                            <CardContent className="space-y-4 p-0">
                                <div className="w-22 h-22 mx-auto flex items-center justify-center">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={85}
                                        height={85}
                                    />
                                </div>
                                <p className="text-lg text-grey-2 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}