// components/Header.tsx
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            {/* Contacts */}
            <div className="h-[30px] bg-primary flex justify-between text-white font-semibold text-sm px-10 md:px-20">
                <div className="flex gap-2 items-center">
                    <Image src={'/icons/Mail.png'} alt={'Mail'} width={20} height={20} />
                    <span className='text-white font-semibold ml-2'>sales@tafurihr.com</span>
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

                <Navigation />
            </div>
        </header>
    )
}