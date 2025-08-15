'use client';

import {
    answerVariants,
    containerVariants,
    defaultViewport,
    fadeInLeft,
    fadeInRight,
    faqItemVariants,
    hoverScale,
    iconHover,
    sectionTitleVariants,
    sidebarItemVariants,
    tapScale
} from '@/lib/animations/variants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
        <motion.div
            className="flex flex-col lg:flex-row gap-8 md:h-[calc(100vh-200px)]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            viewport={defaultViewport}
        >
            {/* Left Sidebar - FAQ Sections */}
            <motion.div
                className="hidden md:flex lg:w-1/4"
                variants={fadeInLeft}
            >
                <nav className="space-y-2 sticky top-0">
                    {(data || []).map((section, index) => (
                        <motion.button
                            key={section.slug}
                            custom={index}
                            variants={sidebarItemVariants}
                            onClick={() => handleNavigationClick(section.slug)}
                            className={cn(
                                "cursor-pointer w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200",
                                activeSection === section.slug
                                    ? "text-primary shadow-sm bg-primary/10"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                            )}
                            whileHover={hoverScale}
                            whileTap={tapScale}
                        >
                            {section.title}
                        </motion.button>
                    ))}
                </nav>
            </motion.div>

            {/* Right Content - All FAQ Questions and Answers with Scroll */}
            <motion.div
                className="lg:w-3/4"
                variants={fadeInRight}
            >
                <div
                    ref={contentRef}
                    className="h-full overflow-y-auto scroll-smooth pr-2"
                    style={{ scrollbarWidth: 'thin' }}
                >
                    <div className="space-y-12">
                        {(data || []).map((section) => (
                            <motion.div
                                key={section.slug}
                                ref={(el) => {
                                    if (el) {
                                        sectionRefs.current[section.slug] = el;
                                    }
                                }}
                                className="scroll-mt-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                            >
                                {/* Section Title */}
                                <motion.div
                                    className="mb-6"
                                    variants={sectionTitleVariants}
                                >
                                    <h2 className="text-3xl font-merriweather font-bold text-black">
                                        {section.title}
                                    </h2>
                                </motion.div>

                                {/* FAQ Items for this section */}
                                <motion.div
                                    className="space-y-4"
                                    variants={containerVariants}
                                >
                                    {section.faqs.map((faq, index) => {
                                        const faqId = `${section.slug}-${index}`;
                                        const isExpanded = expandedFAQs.has(faqId);

                                        return (
                                            <motion.div
                                                key={index}
                                                custom={index}
                                                variants={faqItemVariants}
                                                className="border-b py-2 border-off-white-5 overflow-hidden"
                                                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <motion.div
                                                    className="w-full py-4 text-left flex items-center justify-between transition-colors duration-200"
                                                    whileHover={{ x: 4 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                >
                                                    <span className="font-medium text-black pr-8">
                                                        {faq.question}
                                                    </span>

                                                    <motion.div
                                                        className="cursor-pointer flex-shrink-0"
                                                        onClick={() => toggleFAQ(section.slug, index)}
                                                        whileHover={iconHover}
                                                        whileTap={tapScale}
                                                    >
                                                        <motion.div
                                                            animate={{
                                                                rotate: isExpanded ? 45 : 0,
                                                                scale: isExpanded ? 1.1 : 1
                                                            }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 200,
                                                                damping: 15
                                                            }}
                                                        >
                                                            <Plus className="w-5 h-5 text-gray-500" />
                                                        </motion.div>
                                                    </motion.div>
                                                </motion.div>

                                                <AnimatePresence mode="wait">
                                                    {isExpanded && (
                                                        <motion.div
                                                            key={faqId}
                                                            variants={answerVariants}
                                                            initial="hidden"
                                                            animate="visible"
                                                            exit="exit"
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-6 pb-4">
                                                                <motion.div
                                                                    className="h-px bg-gray-200 mb-4"
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: "100%" }}
                                                                    transition={{ delay: 0.1, duration: 0.3 }}
                                                                />
                                                                <motion.p
                                                                    className="text-grey-2 leading-relaxed"
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.2, duration: 0.3 }}
                                                                >
                                                                    {faq.answer}
                                                                </motion.p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}