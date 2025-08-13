// pages/request-demo/page.tsx or components/RequestDemoPage.tsx
import ContactSection from '@/components/ContactSection'
import DemoSection from '@/components/DemoSection'

export default function RequestDemoPage() {
    return (
        <div className='bg-body'>
            <ContactSection />
            <DemoSection />
        </div>
    )
}