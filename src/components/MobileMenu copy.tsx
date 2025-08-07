// components/MobileMenu.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

type NavItem = {
    name: string
    href: string
}

type MobileMenuProps = {
    navItems: NavItem[]
    currentPath: string
}

export default function MobileMenu({ navItems, currentPath }: MobileMenuProps) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
            >
                <span
                    className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                        }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                />
            </button>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden fixed top-[76px] left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${isMobileMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <nav className="px-10 py-4 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`block px-3 py-3 text-base font-medium transition-colors rounded-lg hover:bg-gray-50 ${currentPath === item.href
                                ? 'text-primary font-semibold bg-gray-50'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    <div className="pt-4 border-t border-gray-100 mt-4">
                        <Button
                            className="w-full bg-button-gradient hover:bg-button-gradient-hover shadow-card text-white py-2 rounded-4xl"
                            onClick={() => {
                                router.push('/request-demo')
                                setIsMobileMenuOpen(false)
                            }}
                        >
                            Request Demo
                        </Button>
                    </div>
                </nav>
            </div>

            {/* Backdrop overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-30 top-[76px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    )
}
