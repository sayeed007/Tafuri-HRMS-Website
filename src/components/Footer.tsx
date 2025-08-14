// components/Footer.tsx
import Image from 'next/image'

type NavItem = {
    name: string
    href: string
}

const navItems: NavItem[] = [
    { name: 'Request Demo', href: '/request-demo' },
    { name: 'Features', href: '/features' },
    { name: 'FAQ', href: '/faq' },
]


export default function Footer() {

    return (
        <footer className="bg-footer-gradient w-full">
            <div className='max-w-[1528px] w-full mx-auto px-5 md:px-20 py-5'>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <a href={'/'}>
                            <div className="flex items-center cursor-pointer space-x-2 mb-6">
                                <Image
                                    src={'/icons/TafuriHR-Logo.png'}
                                    alt={'TafuriHR-Logo'}
                                    width={191}
                                    height={41}
                                    priority
                                />
                            </div>
                        </a>

                        <p className="text-black text-2xl font-semibold mb-6 leading-relaxed">
                            Reduce administrative
                            <br />
                            and repetitive tasks with
                            <br />
                            Tafuri HRMS
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <div className="text-xl font-semibold mb-6 tracking-[1.2px]">PRODUCT</div>
                        <ul className="space-y-3">
                            {navItems.map((nav) => (
                                <li key={nav.name}>
                                    <a
                                        href={nav.href}
                                        className="text-black text-lg transition-colors">
                                        {nav.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <div className="text-xl font-semibold mb-6 tracking-[1.2px]">CONTACT</div>
                        <p className='text-lg text-black mb-3'>+88 01755 645081</p>
                        <p className='text-lg text-black mb-3'>sales@tafurihr.com</p>

                        <p className='text-lg text-black'>House 5/B, Sector-3, Road-13,Uttara, </p>
                        <p className='text-lg text-black mb-2'>Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div className='flex flex-wrap justify-between items-center'>
                    {/* Certifications */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start gap-5">
                        <Image
                            src={'/icons/ISO27001.png'}
                            alt={'ISO27001'}
                            width={92}
                            height={92}
                            className='rounded-full'
                        />

                        <Image
                            src={'/icons/ISO9001.png'}
                            alt={'ISO9001'}
                            width={92}
                            height={92}
                            className='rounded-full'
                        />
                    </div>

                    {/* CONTACT - Social Media */}
                    <div className='w-full md:w-1/2 flex justify-center md:justify-end my-4 md:my-0  gap-4'>
                        {/* Facebook */}
                        <div className='h-10 w-10 bg-black rounded-full flex items-center justify-center'>
                            <a
                                href="https://www.facebook.com/profile.php?id=61566912183130"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={'/icons/Facebook.png'} alt={'Facebook'} width={6} height={12} />
                            </a>
                        </div>

                        {/* Linkedin */}
                        <div className='h-10 w-10 bg-black rounded-full flex items-center justify-center'>
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

                {/* Bottom Section */}
                <div className="border-t border-footer-border mt-4 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-black text-sm mb-4 md:mb-0">
                            © Copyright 2025, All Rights Reserved by TafuriHRM.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 text-sm">
                            A Product of <span className='text-blue ml-2'>Neural Semiconductor</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}