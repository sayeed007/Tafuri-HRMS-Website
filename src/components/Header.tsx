// components/Header.tsx
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="w-full shadow-sm sticky top-0 z-500">
            {/* Contacts */}
            <div className="h-[30px] bg-primary flex items-center w-full">
                <div className='container  w-full mx-auto flex items-center justify-between text-white font-semibold text-sm px-5 md:px-20'>
                    <div className="flex gap-2 items-center">
                        <Image src={'/icons/Mail.png'} alt={'Mail'} width={20} height={20} />
                        <a
                            href="mailto:sales@tafurihr.com"
                            className="text-white font-semibold text-base ml-2"
                            title="Contact TafuriHR Sales Team"
                        >
                            sales@tafurihr.com
                        </a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a
                            href="https://www.facebook.com/profile.php?id=61566912183130"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={'/icons/Facebook.png'} alt={'Facebook'} width={6} height={12} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/tafuri-hrms/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={'/icons/Linkedin.png'} alt={'Linkedin'} width={12} height={12} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="h-16 bg-white flex items-center w-full">
                <div className='container  w-full mx-auto bg-white h-16'>
                    <div className="w-full px-5 md:px-20 flex justify-between items-center h-16 bg-white">
                        <a href={'/'}>
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={'/icons/TafuriHR-Logo.png'}
                                    alt={'TafuriHR-Logo'}
                                    width={191}
                                    height={41}
                                    priority
                                />
                            </div>
                        </a>
                        <Navigation />
                    </div>
                </div>
            </div>


        </header>
    )
}