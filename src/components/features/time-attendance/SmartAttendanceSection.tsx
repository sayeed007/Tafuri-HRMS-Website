"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function SmartAttendanceSection() {

    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0])); // First item expanded by default

    const toggleItem = (index: number) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedItems(newExpanded);
    };

    const accordionItems = [
        {
            title: "Ensure Accurate Records.",
            content: "Time Tracking Is Effortless With Tafuri HR. View Work Hours, Spot Errors, And Automate Timesheet Reminders. Generate Detailed Attendance Reports And Export Them To Payroll With Ease."
        },
        {
            title: "Kiosk Setup",
            content: "Set up dedicated kiosk stations for employees to clock in and out. Easy configuration with biometric or card-based authentication for secure and accurate time tracking."
        },
        {
            title: "Attendance Adjustment",
            content: "Make quick adjustments to attendance records when needed. Handle exceptions, late arrivals, and early departures with proper approval workflows and audit trails."
        },
        {
            title: "Access Attendance Anywhere",
            content: "Cloud-based access allows managers and employees to view attendance data from anywhere. Mobile-friendly interface ensures you stay connected on the go."
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-merriweather font-bold text-black">
                                Smart Attendance Tracking for a More Efficient Workforce.
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {accordionItems.map((item, index) => {
                                const isExpanded = expandedItems.has(index);
                                return (
                                    <div key={index} className="border-b border-border-color overflow-hidden">
                                        <div className="w-full text-left transition-colors duration-200">

                                            {/* HEADER */}
                                            <button
                                                className="flex items-center justify-between w-full p-4 hover:shadow-md transition-shadow"
                                            >
                                                <span className="font-bold text-black">{item.title}</span>

                                                <Image
                                                    src={isExpanded ? '/icons/ArrowUpLight.png' : "/icons/ArrowDownLight.png"}
                                                    alt={'toggleItem'}
                                                    width={20}
                                                    height={20}
                                                    className={"w-5 h-5 cursor-pointer transition-transform duration-200"}
                                                    onClick={() => toggleItem(index)}
                                                />
                                            </button>

                                            {/* CONTENT */}
                                            <div className={cn(
                                                "overflow-hidden transition-all duration-300 ease-in-out",
                                                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                            )}>
                                                <div className="pl-4 pt-4 pb-2">
                                                    <p className="text-grey-4 leading-relaxed">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-end p-6">
                        <Image
                            src={'/features/SmartAttendance.png'}
                            alt={'SmartAttendance'}
                            width={1200}
                            height={600}
                            className="w-[550px] h-[430px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}