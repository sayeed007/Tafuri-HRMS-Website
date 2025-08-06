// components/MobileMenu.tsx
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NavItem = {
    name: string
    href: string
}

type MobileMenuProps = {
    navItems: NavItem[]
    currentPath: string
}

export default function MobileMenu({ navItems, currentPath }: MobileMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="md:hidden relative">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isMenuOpen && (
                <div className="absolute right-10 px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`block px-3 py-2 text-base font-medium ${currentPath === item.href
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-4">
                        <Button className="w-full bg-button-gradient hover:bg-button-gradient-hover shadow-card text-white py-2 rounded-full">
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}