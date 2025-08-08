// components/Navigation.tsx
'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'
import FeaturesDropdown from './FeaturesDropdown'

type NavItem = {
    name: string
    href: string
}

export default function Navigation() {
    const currentPath = usePathname()
    const router = useRouter()
    const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false)

    const navItems: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/features' },
        { name: 'FAQ', href: '/faq' },
    ]

    const handleFeaturesDropdownClose = () => {
        setShowFeaturesDropdown(false)
    }

    return (
        <div className="flex justify-end items-center">
            <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <div
                        key={item.name}
                        className={`relative ${item.name === 'Features' ? 'group' : ''}`}
                        onMouseEnter={() => item.name === 'Features' && setShowFeaturesDropdown(true)}
                        onMouseLeave={() => item.name === 'Features' && setShowFeaturesDropdown(false)}
                    >
                        <a
                            href={item.href}
                            className={`flex items-center px-3 py-2 text-lg font-semibold transition-colors 
                                ${(currentPath === item.href) || (item.name === 'Features' && currentPath?.includes(item.href))
                                    ? 'text-primary font-bold'
                                    : 'text-grey-1 hover:text-black'
                                }`}
                        >
                            {item.name}
                            {item.name === 'Features' && (
                                <span className="ml-2 mt-1">
                                    <Image
                                        src={'/icons/ArrowDown.png'}
                                        alt={'ArrowDown'}
                                        width={10}
                                        height={5}
                                    />
                                </span>
                            )}
                        </a>

                        {/* Features Dropdown Component */}
                        {item.name === 'Features' && (
                            <FeaturesDropdown
                                isVisible={showFeaturesDropdown}
                                onClose={handleFeaturesDropdownClose}
                            />
                        )}
                    </div>
                ))}
            </nav>
            <div className="hidden md:block ml-15">
                <Button
                    onClick={() => router.push('/request-demo')}
                    className="cursor-pointer bg-button-gradient hover:bg-button-gradient-hover shadow-card text-white text-lg font-semibold rounded-4xl"
                >
                    Request Demo
                </Button>
            </div>

            <MobileMenu navItems={navItems} currentPath={currentPath} />
        </div>
    )
}