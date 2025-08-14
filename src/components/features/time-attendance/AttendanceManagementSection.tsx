import { Card, CardContent } from "@/components/ui/card"

export default function AttendanceManagementSection() {

    const benefits = [
        {
            title: "Increased Accuracy",
            description: "Automated Time Tracking Reduces Errors Associated With Manual Entry."
        },
        {
            title: "Improved Compliance",
            description: "Ensure Adherence To Company Policies And Labor Laws With Detailed Attendance Data."
        },
        {
            title: "Enhanced Productivity",
            description: "With Easy Time Tracking, Attendance Records, Managers Can Make Better Decisions And Allocate Resources More Effectively."
        },
        {
            title: "Data-Driven Decisions",
            description: "Use Attendance Trends And Insights To Make Informed Decisions Around Staffing, Productivity, And Employee Engagement."
        },
        {
            title: "Employee Self-Service",
            description: "Empower Employees To View And Manage Their Attendance, Requesting Admin Work And Keeping Them On Top Of Their Schedules."
        },
        {
            title: "Easy Integration",
            description: "Seamlessly Integrate With Your Existing HR And Payroll Systems For Smooth Operations."
        }
    ]

    return (
        <section
            className="py-10 px-5 md:px-20"
            aria-labelledby="attendance-management-section"
        >
            <div className="flex flex-wrap justify-between mb-6 md:mb-12">
                <h2 className="w-full md:w-1/2 text-3xl lg:text-4xl font-merriweather font-bold text-black mb-4">
                    Attendance Management
                    <br />
                    Made Simple
                </h2>
                <div className="w-full md:w-1/2">
                    <p className="text-base text-grey-2 max-w-3xl">
                        Transform the way you manage attendance—simplify the process, gain insights, and
                        empower your team. Let our Attendance Management system be your solution for a
                        more efficient, compliant, and productive workspace.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 border-0 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                        <CardContent className="space-y-3 p-0">
                            <h3 className="text-xl font-bold text-black">{benefit.title}</h3>
                            <p className="text-base text-grey-2 leading-relaxed">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}