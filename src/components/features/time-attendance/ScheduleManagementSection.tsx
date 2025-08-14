import Image from "next/image"

export default function ScheduleManagementSection() {

    const features = [
        "Easily assign shifts with a simple drag-and-drop interface.",
        "Allow employees to view and swap shifts, reducing admin workload.",
        "Prevent scheduling conflicts and overtime issues automatically.",
        "Sync schedules seamlessly with attendance tracking and payroll processing."
    ]

    return (
        <section
            className="py-10 bg-white px-5 md:px-20"
            aria-labelledby="schedule-management-section"
        >
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="flex justify-start relative">
                    <Image
                        src={'/features/ScheduleManagement.png'}
                        alt={'ScheduleManagement'}
                        width={1200}
                        height={600}
                        className="w-[550px] h-[325px]"
                    />
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-merriweather font-bold text-black">
                            Quickly create and manage employee schedules with ease.
                        </h2>
                        <p className="text-base text-grey-2">
                            Easily create, update, and manage employee schedules in minutes,
                            not hours.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <Image
                                    src={'/icons/CoreHRPoint.png'}
                                    alt={'CoreHRPoint'}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                />
                                <p className="font-semibold text-black">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}