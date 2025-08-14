// components/OperationsSection.tsx

import Image from "next/image"

const operations = [
    { icon: '/icons/EmployeeOnboarding.png', title: 'Employee Onboarding' },
    { icon: '/icons/TimeTracking.png', title: 'Time Tracking' },
    { icon: '/icons/LeaveManagement.png', title: 'Leave Management' },
    { icon: '/icons/PayrollManagement.png', title: 'Payroll Management' },
    { icon: '/icons/HelpDesk.png', title: 'Help Desk' },
    { icon: '/icons/CustomizeReport.png', title: 'Customize Report' },

    { icon: '/icons/PerformanceTracking.png', title: 'Performance Tracking' },
    { icon: '/icons/HRLetterGeneration.png', title: 'Automated HR Letter Generation' },
    { icon: '/icons/ShiftManagement.png', title: 'Workforce Scheduling & Shift Management' },
    { icon: '/icons/FoodManagement.png', title: 'Food Management' },
    { icon: '/icons/OrganizationHierarchy.png', title: 'Organization & Hierarchy' },
    { icon: '/icons/RealTimeNotification.png', title: 'Real-time Notifications' },

    { icon: '/icons/TransportBenefitManagement.png', title: 'Car/Bike Benefit Management' },
    { icon: '/icons/RecrutmentManagement.png', title: 'Recruitment Management' },
    { icon: '/icons/DocumentManagement.png', title: 'Digital Document Management' },
    { icon: '/icons/EmployeeTracking.png', title: 'Employee Tracking' },
    { icon: '/icons/GratuityManagement.png', title: 'Gratuity Management' },
    { icon: '/icons/ProvidentFundManagement.png', title: 'Provident Fund Management' },

    { icon: '/icons/SimManagement.png', title: 'Corporate Sim Management' },
    { icon: '/icons/AIPoweredAssistance.png', title: 'AI-powered Assistance' },
    { icon: '/icons/PickAndDropManagement.png', title: 'Pick & Drop Management' },
    { icon: '/icons/EmployeeOffboarding.png', title: 'Employee Offboarding' },
]

export default function OperationsSection() {
    return (
        <section className="px-5 md:px-20 py-10 bg-operation w-full">
            <div className="mx-auto sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mv-4 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-merriweather font-normal text-black mb-4">
                        All your operations. All in one place
                    </h2>
                </div>

                {/* Operations Grid */}
                <div className="md:mx-25 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
                    {operations.map((operation) => {
                        const IconComponent = operation.icon
                        return (
                            <div
                                key={operation.title}
                                className="group flex flex-col items-center justify-between min-w-[155px] min-hh-[175px] p-6 rounded-xl bg-white border border-card-border cursor-pointer transition-shadow duration-300 ease-in-out operations-card"
                            >
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={IconComponent}
                                        alt={`${operation.title} Icon for TafuriHR`}
                                        fill
                                        sizes="64px"
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="mt-4 text-base text-grey-2 font-semibold text-center leading-tight">
                                    {operation.title}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}