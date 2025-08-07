'use client';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
    const [activeSection, setActiveSection] = useState<string>('');
    const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());
    const [isScrolling, setIsScrolling] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement }>({});

    // Initialize active section
    useEffect(() => {
        if (data && data.length > 0 && !activeSection) {
            setActiveSection(data[0].slug);
        }
    }, [data, activeSection]);

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

    // Handle navigation click - scroll to section
    const handleNavigationClick = (sectionSlug: string) => {
        setIsScrolling(true);
        setActiveSection(sectionSlug);

        const sectionElement = sectionRefs.current[sectionSlug];
        if (sectionElement && contentRef.current) {
            const containerTop = contentRef.current.offsetTop;
            const sectionTop = sectionElement.offsetTop;
            const scrollTop = sectionTop - containerTop - 20; // 20px offset

            contentRef.current.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });

            // Reset scrolling flag after animation
            setTimeout(() => setIsScrolling(false), 1000);
        }
    };

    // Handle scroll - update active section
    useEffect(() => {
        if (!contentRef.current || isScrolling) return;

        const handleScroll = () => {
            if (isScrolling) return;

            const container = contentRef.current;
            if (!container) return;

            const containerTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const sections = Object.entries(sectionRefs.current);

            // Find which section is most visible
            let activeSlug = '';
            let maxVisibleArea = 0;

            sections.forEach(([slug, element]) => {
                const rect = element.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                const elementTop = rect.top - containerRect.top + container.scrollTop;
                const elementBottom = elementTop + rect.height;

                const visibleTop = Math.max(elementTop, containerTop);
                const visibleBottom = Math.min(elementBottom, containerTop + containerHeight);
                const visibleArea = Math.max(0, visibleBottom - visibleTop);

                if (visibleArea > maxVisibleArea) {
                    maxVisibleArea = visibleArea;
                    activeSlug = slug;
                }
            });

            if (activeSlug && activeSlug !== activeSection) {
                setActiveSection(activeSlug);
            }
        };

        const container = contentRef.current;
        container.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection, isScrolling, data]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-200px)]">
            {/* Left Sidebar - FAQ Sections */}
            <div className="lg:w-1/4">
                <nav className="space-y-2 sticky top-0">
                    {(data || []).map((section) => (
                        <button
                            key={section.slug}
                            onClick={() => handleNavigationClick(section.slug)}
                            className={cn(
                                "cursor-pointer w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200",
                                activeSection === section.slug
                                    ? "text-primary shadow-sm bg-primary/10"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            )}
                        >
                            {section.title}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Right Content - All FAQ Questions and Answers with Scroll */}
            <div className="lg:w-3/4">
                <div
                    ref={contentRef}
                    className="h-full overflow-y-auto scroll-smooth pr-2"
                    style={{ scrollbarWidth: 'thin' }}
                >
                    <div className="space-y-12">
                        {(data || []).map((section) => (
                            <div
                                key={section.slug}
                                ref={(el) => {
                                    if (el) {
                                        sectionRefs.current[section.slug] = el;
                                    }
                                }}
                                className="scroll-mt-4"
                            >
                                {/* Section Title */}
                                <div className="mb-6">
                                    <h2 className="text-3xl font-merriweather font-bold text-gray-900">
                                        {section.title}
                                    </h2>
                                </div>

                                {/* FAQ Items for this section */}
                                <div className="space-y-4">
                                    {section.faqs.map((faq, index) => {
                                        const faqId = `${section.slug}-${index}`;
                                        const isExpanded = expandedFAQs.has(faqId);

                                        return (
                                            <div
                                                key={index}
                                                className="border-b py-2 border-off-white-5 overflow-hidden"
                                            >
                                                <div
                                                    className="w-full py-4 text-left flex items-center justify-between transition-colors duration-200"
                                                >
                                                    <span className="font-medium text-gray-900 pr-8">
                                                        {faq.question}
                                                    </span>

                                                    <div
                                                        className="cursor-pointer flex-shrink-0"
                                                        onClick={() => toggleFAQ(section.slug, index)}
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}