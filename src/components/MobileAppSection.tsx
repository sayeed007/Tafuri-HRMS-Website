import { Download, Star } from 'lucide-react'
import Image from 'next/image'

export default function MobileAppSection() {
    return (
        <section className="py-10 mx-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 items-center">
                {/* Left Content - Mobile Mockup */}
                <div className="relative flex justify-center lg:justify-start col-span-1">
                    <Image
                        src={'/icons/MobileAppView.png'}
                        alt={'Mobile App View'} // Improved alt text
                        width={1800}
                        height={800}
                    />
                </div>

                {/* Right Content */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                        Manage HR on the go with
                        <br />
                        the <span className="text-blue-600">Tafuri HR </span> mobile app.
                    </h2>

                    <p className="text-base text-black mb-8 leading-relaxed">
                        Embrace the future of flexible work—stay connected and productive from anywhere with the Tafuri HR mobile app.
                    </p>

                    <div className="flex justify-between">
                        {/* App Store - QR to download */}
                        <div className="space-y-4 mb-8">
                            <Image
                                src={'/icons/QRCode_AppStore.png'} // Corrected to App Store
                                alt={'App Store QR Code'} // Improved alt text
                                width={125}
                                height={125}
                            />

                            <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors">
                                <Download className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Download on the</div>
                                    <div className="text-sm font-semibold">App Store</div>
                                </div>
                            </button>

                            <div className="flex items-center space-x-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-black">4.8</div>
                                    <div className="flex items-center justify-center space-x-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <div className="text-sm text-black">App Rating</div>
                                </div>

                                <div className="text-center">
                                    <div className="text-2xl font-bold text-black">50K+</div>
                                    <div className="text-sm text-black">Downloads</div>
                                </div>
                            </div>
                        </div>

                        {/* Play Store - QR to download */}
                        <div className="space-y-4 mb-8">
                            <Image
                                src={'/icons/QRCode_PlayStore.png'}
                                alt={'Google Play QR Code'} // Improved alt text
                                width={125}
                                height={125}
                            />

                            <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors">
                                <Download className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Get it on</div>
                                    <div className="text-sm font-semibold">Google Play</div>
                                </div>
                            </button>

                            <div className="flex items-center space-x-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-black">4.9</div>
                                    <div className="flex items-center justify-center space-x-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <div className="text-sm text-black">App Rating</div>
                                </div>

                                <div className="text-center">
                                    <div className="text-2xl font-bold text-black">90K+</div>
                                    <div className="text-sm text-black">Downloads</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

















// // components/MobileAppSection.tsx
// import { Download, Star } from 'lucide-react'
// import Image from 'next/image'

// export default function MobileAppSection() {
//     return (
//         <section className="py-10 mx-10">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//                 {/* Left Content - Mobile Mockup */}
//                 <div className="relative flex justify-center lg:justify-start">
//                     <Image
//                         src={'/icons/MobileAppView.png'}
//                         alt={'MobileAppView'}
//                         width={1800}
//                         height={800}
//                     />
//                 </div>

//                 {/* Right Content */}
//                 <div>
//                     <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
//                         Manage HR on the go with
//                         <br />
//                         the <span className="text-blue-600">Tafuri HR </span> mobile app.
//                     </h2>

//                     <p className="text-base text-black mb-8 leading-relaxed">
//                         Embrace the future of flexible work—stay connected and productive from anywhere with the Tafuri HR mobile app.
//                     </p>

//                     <div className='flex justify-between'>
//                         {/* APP STORE - QR to download */}
//                         <div className="space-y-4 mb-8">
//                             <Image
//                                 src={'/icons/QRCode_PlayStore.png'}
//                                 alt={'QRCode_PlayStore'}
//                                 width={125}
//                                 height={125}
//                             />

//                             <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors">
//                                 <Download className="w-5 h-5" />
//                                 <div className="text-left">
//                                     <div className="text-xs text-gray-300">Download on the</div>
//                                     <div className="text-sm font-semibold">App Store</div>
//                                 </div>
//                             </button>

//                             <div className="flex items-center space-x-8">
//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-black">4.8</div>
//                                     <div className="flex items-center justify-center space-x-1 mb-1">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                                         ))}
//                                     </div>
//                                     <div className="text-sm text-black">App Rating</div>
//                                 </div>

//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-black">50K+</div>
//                                     <div className="text-sm text-black">Downloads</div>
//                                 </div>
//                             </div>

//                         </div>

//                         {/* Play STORE - QR to download */}
//                         <div className="space-y-4 mb-8">
//                             <Image
//                                 src={'/icons/QRCode_PlayStore.png'}
//                                 alt={'QRCode_PlayStore'}
//                                 width={125}
//                                 height={125}
//                             />

//                             <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors">
//                                 <Download className="w-5 h-5" />
//                                 <div className="text-left">
//                                     <div className="text-xs text-gray-300">Get it on</div>
//                                     <div className="text-sm font-semibold">Google Play</div>
//                                 </div>
//                             </button>

//                             <div className="flex items-center space-x-8">
//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-black">4.9</div>
//                                     <div className="flex items-center justify-center space-x-1 mb-1">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                                         ))}
//                                     </div>
//                                     <div className="text-sm text-black">App Rating</div>
//                                 </div>

//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-black">90K+</div>
//                                     <div className="text-sm text-black">Downloads</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }