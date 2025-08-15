// src\app\request-demo\page.tsx
import ContactSection from '@/components/request-demo/ContactSection'
import DemoSection from '@/components/request-demo/DemoSection'

export default function RequestDemoPage() {
    return (
        <div className='bg-body'>
            <ContactSection />
            <DemoSection />
        </div>
    )
}