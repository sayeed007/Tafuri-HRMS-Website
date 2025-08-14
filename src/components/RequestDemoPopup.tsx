'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const RequestDemoPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check if user has already seen/interacted with the popup
        const hasSeenPopup = localStorage.getItem('hr-popup-seen');

        if (!hasSeenPopup) {
            // First time visitor - show popup after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
                setIsLoaded(true);
            }, 1000); // 1 second delay for better UX

            return () => clearTimeout(timer);
        } else {
            setIsLoaded(true);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Mark as seen so it won't show again
        localStorage.setItem('hr-popup-seen', 'true');
    };

    const handleRequestDemo = () => {
        // Handle demo request logic here
        console.log('Demo requested');

        // Close popup and mark as seen
        setIsOpen(false);
        localStorage.setItem('hr-popup-seen', 'true');

        // Add your demo request logic here
        // e.g., redirect to demo page, open contact form, etc.
    };

    // For development/testing - add a reset button
    // const resetPopupState = () => {
    //     localStorage.removeItem('hr-popup-seen');
    //     setIsOpen(true);
    // };

    // Don't render anything until we've checked localStorage
    if (!isLoaded) {
        return null;
    }

    return (
        <>
            {/* Development helper - remove in production */}
            {/* {process.env.NODE_ENV === 'development' && (
                <div className="fixed bottom-4 left-4 z-50">
                    <button
                        onClick={resetPopupState}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                        Reset Popup (Dev Only)
                    </button>
                </div>
            )} */}

            {isOpen && (
                <div className="fixed inset-0 bg-[rgba(8,7,8,0.3)] flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
                    <div className="bg-footer-gradient rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="cursor-pointer absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors group"
                            aria-label="Close popup"
                        >
                            <X className="w-6 h-6 text-grey-2 group-hover:text-gray-800" />
                        </button>

                        <div className="flex flex-col lg:flex-row min-h-[500px]">
                            {/* Left Side - Content */}
                            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="max-w-lg">
                                    <h1 className="text-4xl lg:text-5xl font-bold font-merriweather text-black leading-tight mb-6">
                                        Easy-to-Track HR Solution That Works the Way You Do
                                    </h1>

                                    <p className="text-2xl text-black mb-8 leading-relaxed">
                                        See how Tafuri HR reduces administrative and repetitive tasks
                                    </p>

                                    <button
                                        onClick={handleRequestDemo}
                                        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        Request Demo
                                    </button>
                                </div>
                            </div>

                            {/* Right Side - Image Placeholder */}
                            <div className="flex-1 relative flex px-10 py-4 items-center justify-center">
                                {/* Image Placeholder */}
                                <Image
                                    src={'/icons/RequestDemoPopup.png'}
                                    alt={'RequestDemoPopup'}
                                    width={800}
                                    height={400}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    quality={85}
                                    className='max-w-[100%] shadow-request-demo'
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