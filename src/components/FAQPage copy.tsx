'use client';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useState } from 'react';

// Types
interface FAQ {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    slug: string;
    faqs: FAQ[];
}

interface FAQPageProps {
    // You can pass data as props or load from files
    data?: FAQSection[];
}

export default function FAQPage({ data }: FAQPageProps) {
    const [activeSection, setActiveSection] = useState<string>('help-desk');
    const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());

    const toggleFAQ = (sectionSlug: string, index: number) => {
        const faqId = `${sectionSlug}-${index}`;
        const newExpanded = new Set(expandedFAQs);

        if (newExpanded.has(faqId)) {
            newExpanded.delete(faqId);
        } else {
            newExpanded.add(faqId);
        }

        setExpandedFAQs(newExpanded);
    };

    const currentSection = (data || []).find(section => section.slug === activeSection);

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - FAQ Sections */}
            <div className="lg:w-1/4">
                <nav className="space-y-2">
                    {(data || []).map((section) => (
                        <button
                            key={section.slug}
                            onClick={() => setActiveSection(section.slug)}
                            className={cn(
                                "cursor-pointer w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                                activeSection === section.slug
                                    ? "text-primary shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            )}
                        >
                            {section.title}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Right Content - FAQ Questions and Answers */}
            <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {currentSection?.title}
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {currentSection?.faqs.map((faq, index) => {
                        const faqId = `${activeSection}-${index}`;
                        const isExpanded = expandedFAQs.has(faqId);

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                            >
                                <div
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-medium text-gray-900 pr-8">
                                        {faq.question}
                                    </span>

                                    <div
                                        className="cursor-pointer flex-shrink-0"
                                        onClick={() => toggleFAQ(activeSection, index)}
                                    >
                                        <Plus
                                            className={cn(
                                                "w-5 h-5 text-gray-500 transition-transform duration-200",
                                                isExpanded && "rotate-45"
                                            )}
                                        />
                                    </div>
                                </div>

                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="px-6 pb-4">
                                        <div className="h-px bg-gray-200 mb-4"></div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}