'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import React from 'react';

interface ClientPopupProps {
    children: React.ReactNode;
}

const ClientPopup = ({ children }: ClientPopupProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hr-popup-seen');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                setIsLoaded(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsLoaded(true);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hr-popup-seen', 'true');
    };

    const handleRequestDemo = () => {
        console.log('Demo requested');
        setIsOpen(false);
        localStorage.setItem('hr-popup-seen', 'true');
        // Add your demo request logic here
    };

    if (!isLoaded) {
        return null;
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                // Ensure child is a valid React element before cloning
                if (React.isValidElement(child)) {
                    // Add onClick only to button elements
                    if (child.type === 'button') {
                        return React.cloneElement(child, {
                            onClick: handleRequestDemo,
                        });
                    }
                    return child;
                }
                return child;
            })}
            {/* Close button */}
            <button
                onClick={handleClose}
                className="cursor-pointer absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors group"
                aria-label="Close popup"
            >
                <X className="w-6 h-6 text-grey-2 group-hover:text-gray-800" />
            </button>
        </div>
    );
};

export default ClientPopup;