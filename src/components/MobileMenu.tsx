// components/MobileMenu.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import featuresData from '../data/features/features.json'

type NavItem = {
    name: string
    href: string
}

type FeatureItem = {
    name: string
    description: string
    slug: string
}

type MobileMenuProps = {
    navItems: NavItem[]
    currentPath: string
}

export default function MobileMenu({ navItems, currentPath }: MobileMenuProps) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

    const featureItems: FeatureItem[] = featuresData.features

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        if (!isMobileMenuOpen) {
            setIsFeaturesOpen(false) // Close features submenu when closing main menu
        }
    }

    const toggleFeaturesMenu = () => {
        setIsFeaturesOpen(!isFeaturesOpen)
    }

    const handleFeatureClick = (slug: string) => {
        router.push(`/features/${slug}`)
        setIsMobileMenuOpen(false)
        setIsFeaturesOpen(false)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setIsFeaturesOpen(false)
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
                    className={`block w-6 h-0.5 bg-grey-2 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-grey-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                        }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-grey-2 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                />
            </button>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden fixed top-[76px] left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${isMobileMenuOpen
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <nav className="px-10 py-4 space-y-2 max-h-[calc(100vh-76px)] overflow-y-auto">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            {item.name === 'Features' ? (
                                <>
                                    {/* Features Menu Item with Dropdown */}
                                    <button
                                        onClick={toggleFeaturesMenu}
                                        className={`w-full flex items-center justify-between px-3 py-3 text-base font-medium transition-colors rounded-lg hover:bg-gray-50 ${currentPath === item.href
                                            ? 'text-primary font-semibold bg-gray-50'
                                            : 'text-grey-2 hover:text-black'
                                            }`}
                                    >
                                        <span>{item.name}</span>
                                        <span className={`transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`}>
                                            <Image
                                                src={'/icons/ArrowDown.png'}
                                                alt={'ArrowDown'}
                                                width={10}
                                                height={5}
                                            />
                                        </span>
                                    </button>

                                    {/* Features Submenu */}
                                    <div
                                        className={`overflow-y-scroll transition-all duration-300 ease-in-out ${isFeaturesOpen
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="pl-4 space-y-1 mt-2">
                                            {featureItems.map((feature) => (
                                                <button
                                                    key={feature.slug}
                                                    onClick={() => handleFeatureClick(feature.slug)}
                                                    className="w-full text-left px-3 py-2 text-sm text-grey-2 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                                                >
                                                    <div className="font-medium">{feature.name}</div>
                                                    <div className="text-xs text-gray-400 mt-1 line-clamp-2">
                                                        {feature.description}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* Regular Menu Items */
                                <a
                                    href={item.href}
                                    className={`block px-3 py-3 text-base font-medium transition-colors rounded-lg hover:bg-gray-50 ${currentPath === item.href
                                        ? 'text-primary font-semibold bg-gray-50'
                                        : 'text-grey-2 hover:text-black'
                                        }`}
                                    onClick={closeMobileMenu}
                                >
                                    {item.name}
                                </a>
                            )}
                        </div>
                    ))}

                    <div className="pt-4 border-t border-gray-100 mt-4">
                        <Button
                            className="cursor-pointer w-full bg-button-gradient hover:bg-button-gradient-hover shadow-card text-white py-2 rounded-4xl"
                            onClick={() => {
                                router.push('/request-demo')
                                closeMobileMenu()
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
                    onClick={closeMobileMenu}
                />
            )}
        </>
    )
}