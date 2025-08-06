// app/page.tsx
import AnimatedKioskCard from '@/components/AnimatedKioskCard'
import CoreHRSection from '@/components/CoreHRSection'
import DataSection from '@/components/DataSection'
import FeaturesSection from '@/components/FeaturesSection'
import HeroSection from '@/components/HeroSection'
import MadeForAllSection from '@/components/MadeForAllSection'
import MobileAppSection from '@/components/MobileAppSection'
import OperationsSection from '@/components/OperationsSection'
import PartnersSection from '@/components/PartnersSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-body overflow-x-clip">
      <HeroSection />
      <OperationsSection />
      <FeaturesSection />
      <AnimatedKioskCard />
      <CoreHRSection />
      <MadeForAllSection />
      <DataSection />
      <PartnersSection />
      <TestimonialsSection />
      <MobileAppSection />
    </main>
  )
}