import { Button } from "@/components/ui/button"
import Image from "next/image"

// Hero Section Component
export default function HeroSection() {
    return (
        <section
            className="bg-body-gradient py-10 px-5 md:px-20"
            aria-labelledby="features-attendance-hero-section"
        >
            <div className="grid lg:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-merriweather font-bold text-black leading-tight">
                        Organize and track your
                        <br />
                        {`team's time—all in one`}
                        <br />
                        platform.
                    </h1>
                    <p className="text-base text-grey-2 leading-relaxed">
                        Eliminate manual data entry and separate scheduling tools. Track time,
                        manage attendance, create schedules, and sync hours to payroll—all in one
                        platform.
                    </p>

                    <a href={'/request-demo'}>
                        <Button
                            size="lg"
                            className="cursor-pointer bg-button-gradient hover:bg-button-gradient-hover text-white px-8 py-6 rounded-full text-lg font-semibold mb-8"
                        >
                            Schedule a Demo
                        </Button>
                    </a>
                </div>

                <div className="relative w-full flex justify-end">
                    <Image
                        src={'/features/AttendanceHeroBanner.png'}
                        alt={'AttendanceHeroBanner'}
                        width={1200}
                        height={600}
                        className="w-[550px] h-[480px]"
                    />

                    <Image
                        src={'/gif/CheckInOut.gif'}
                        alt={'CheckInOut'}
                        width={200}
                        height={100}
                        className="absolute right-[-20px] md:right-[-50px] top-4/6"
                        unoptimized
                    />
                </div>
            </div>
        </section>
    )
}