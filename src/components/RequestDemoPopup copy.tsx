'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LOCAL_STORAGE_KEY = 'hr-popup-seen';
const POPUP_DELAY_MS = 1000;

const RequestDemoPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        try {
            const hasSeenPopup = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (!hasSeenPopup) {
                const timer = setTimeout(() => {
                    setIsOpen(true);
                    setIsLoaded(true);
                    // Move focus to the first button when popup opens
                    firstFocusableRef.current?.focus();
                }, POPUP_DELAY_MS);
                return () => clearTimeout(timer);
            } else {
                setIsLoaded(true);
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        // Trap focus within the popup
        const handleTabKey = (event: KeyboardEvent) => {
            if (!isOpen || !dialogRef.current) return;

            const focusableElements = dialogRef.current.querySelectorAll(
                'button, [href], [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.key === 'Tab') {
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keydown', handleTabKey);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keydown', handleTabKey);
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
        } catch (error) {
            console.error('Error setting localStorage:', error);
        }
    };

    const handleRequestDemo = () => {
        handleClose(); // Close popup and mark as seen before navigation
    };

    if (!isLoaded) {
        return null;
    }

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[rgba(8,7,8,0.3)] flex items-center justify-center p-4 z-50 animate-in fade-in duration-100"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="popup-title"
                    ref={dialogRef}
                >
                    <div className="bg-footer-gradient rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-100">
                        <button
                            onClick={handleClose}
                            className="cursor-pointer absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors group"
                            aria-label="Close popup"
                        >
                            <X className="w-6 h-6 text-grey-2 group-hover:text-gray-800" />
                        </button>

                        <div className="flex flex-col lg:flex-row min-h-[500px]">
                            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="max-w-lg">
                                    <h1
                                        id="popup-title"
                                        className="text-4xl lg:text-5xl font-bold font-merriweather text-black leading-tight mb-6"
                                    >
                                        Easy-to-Track HR Solution That Works the Way You Do
                                    </h1>
                                    <p className="text-2xl text-black mb-8 leading-relaxed">
                                        See how Tafuri HR reduces administrative and repetitive tasks
                                    </p>
                                    <Link href="/request-demo" passHref>
                                        <button
                                            ref={firstFocusableRef}
                                            onClick={handleRequestDemo}
                                            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        >
                                            Request Demo
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1 relative flex px-10 py-4 items-center justify-center">
                                <Image
                                    src="/icons/RequestDemoPopup.png"
                                    alt="Request Demo Popup"
                                    width={800}
                                    height={400}
                                    loading="eager"
                                    priority={true}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    quality={85}
                                    className="max-w-[100%] shadow-request-demo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RequestDemoPopup;