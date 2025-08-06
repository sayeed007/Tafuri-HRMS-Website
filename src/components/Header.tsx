// components/Header.tsx
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'

type NavItem = {
    name: string
    href: string
}

type HeaderProps = {
    currentPath: string
}

export default function Header({ currentPath }: HeaderProps) {
    const navItems: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/features' },
        { name: 'FAQ', href: '/faq' },
    ]

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            {/* Contacts */}
            <div className="h-[30px] bg-primary flex justify-between text-white font-semibold text-sm px-10 md:px-20">
                <div className="flex gap-2 items-center">
                    <Image src={'/icons/Mail.png'} alt={'Mail'} width={20} height={20} />
                    sales@tafurihr.com
                </div>
                <div className="flex gap-4 items-center">
                    <Image src={'/icons/Facebook.png'} alt={'Facebook'} width={6} height={12} />
                    <Image src={'/icons/Linkedin.png'} alt={'Linkedin'} width={12} height={12} />
                </div>
            </div>

            {/* Navigation */}
            <div className="w-full px-10 md:px-20 flex justify-between items-center h-16 bg-white">
                <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <Image
                            src={'/icons/TafuriHR-Logo.png'}
                            alt={'TafuriHR-Logo'}
                            width={191}
                            height={41}
                            priority
                        />
                    </div>
                </div>

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
                                {item.name === 'Features' &&
                                    <span className='ml-2 mt-1'>
                                        <Image
                                            src={'/icons/ArrowDown.png'}
                                            alt={'ArrowDown'}
                                            width={10}
                                            height={5}
                                        />
                                    </span>
                                }
                            </a>
                        ))}
                    </nav>
                    <div className="hidden md:block ml-15">
                        <Button className="cursor-pointer bg-button-gradient hover:bg-button-gradient-hover shadow-card text-white rounded-4xl">
                            Request Demo
                        </Button>
                    </div>
                </div>

                <MobileMenu navItems={navItems} currentPath={currentPath} />
            </div>
        </header>
    )
}
