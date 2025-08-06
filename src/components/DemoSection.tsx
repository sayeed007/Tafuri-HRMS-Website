// components/DemoSection.tsx
import DemoContent from './DemoContent'
import DemoForm from './DemoForm'

export default function DemoSection() {
    return (
        <section className="py-16 mx-20 bg-white">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <DemoContent />
                <DemoForm />
            </div>
        </section>
    )
}