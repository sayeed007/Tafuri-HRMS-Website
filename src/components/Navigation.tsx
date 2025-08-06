// components/Navigation.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'

type NavItem = {
    name: string
    href: string
}

export default function Navigation() {
    const currentPath = usePathname()
    const router = useRouter();

    const navItems: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/features' },
        { name: 'FAQ', href: '/faq' },
    ]

    console.log('Current path:', currentPath)

    return (
        <div className="flex justify-end">
            <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${currentPath === item.href
                            ? 'text-primary font-semibold'
                            : 'text-grey-1 hover:text-gray-900'
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
                ))}
            </nav>
            <div className="hidden md:block ml-15">
                <Button
                    onClick={() => router.push('/request-demo')}
                    className="cursor-pointer bg-button-gradient hover:bg-button-gradient-hover shadow-card text-white rounded-4xl">
                    Request Demo
                </Button>
            </div>

            <MobileMenu navItems={navItems} currentPath={currentPath} />
        </div>
    )
}