// components/FeaturesDropdown.tsx
'use client'

import { useRouter } from 'next/navigation'
import featuresData from '../data/features/features.json'

type FeatureItem = {
    name: string
    description: string
    slug: string
}

interface FeaturesDropdownProps {
    isVisible: boolean
    onClose: () => void
}

export default function FeaturesDropdown({ isVisible, onClose }: FeaturesDropdownProps) {
    const router = useRouter()
    const featureItems: FeatureItem[] = featuresData.features

    const handleFeatureClick = (slug: string) => {
        router.push(`/features/${slug}`)
        onClose()
    }

    if (!isVisible) return null

    return (
        <div className="absolute top-full right-[-270px] lg:right-[-270px] md:right-[-150px] sm:right-[-50px] w-[1200px] lg:w-[1200px] md:w-[800px] sm:w-[400px] bg-transparent z-50 pt-4">
            <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1 p-4 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[80vh] overflow-y-auto">
                {featureItems.map((feature) => (
                    <button
                        key={feature.slug}
                        onClick={() => handleFeatureClick(feature.slug)}
                        className="cursor-pointer text-left p-3 rounded-md hover:bg-gray-50 transition-all duration-300 ease-in-out group min-h-[80px] flex flex-col justify-start hover:scale-105 hover:shadow-md hover:z-10 relative"
                    >
                        <div className="font-bold text-black transition-colors text-base">
                            {feature.name}
                        </div>
                        <div className="text-sm  text-grey-2 mt-1 line-clamp-3">
                            {feature.description}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}