'use client';

import React, { useState, useEffect, useRef } from 'react';
import RequestDemoPopupContent from './RequestDemoPopupContent';

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

    if (!isLoaded || !isOpen) {
        return null;
    }

    return (
        <div ref={dialogRef}>
            <RequestDemoPopupContent
                onClose={handleClose}
                onRequestDemo={handleRequestDemo}
            />
        </div>
    );
};

export default RequestDemoPopup;