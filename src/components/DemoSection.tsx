// components/DemoSection.tsx
import DemoContent from './DemoContent'
import DemoForm from './DemoForm'

export default function DemoSection() {
    return (
        <section className="bg-white">
            <div className="px-5 md:px-20 py-10 flex flex-col lg:flex-row gap-12 items-start">
                <DemoContent />
                <DemoForm />
            </div>
        </section>
    )
}