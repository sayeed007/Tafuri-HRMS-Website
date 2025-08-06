// components/ContactSection.tsx
export default function ContactSection() {
    return (
        <section className="py-16 bg-body">
            <div className="mx-20 px-10 md:px-20">
                {/* Header */}
                <div className="text-center font-merriweather mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        {`We'd love to hear`}
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold text-black">
                        from you
                    </h1>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Sales */}
                    <div className="bg-white rounded-lg shadow-4 p-8 text-center max-w-[400px]">
                        <h3 className="text-2xl font-merriweather font-bold text-black mb-4">
                            Contact Sales
                        </h3>
                        <p className="text-lg text-grey-2 mb-6 leading-relaxed">
                            Interested in Tafuri HR? Our sales team is available for
                            feature & pricing queries. Call
                        </p>
                        <div className="space-y-2">
                            <a
                                href="tel:+8801755645081"
                                className="block text-blue hover:text-blue-600 font-bold text-lg"
                            >
                                +88 01755 645081
                            </a>
                            <a
                                href="mailto:sales@tafurihr.com"
                                className="block text-blue hover:text-blue-600 font-bold text-lg"
                            >
                                sales@tafurihr.com
                            </a>
                        </div>
                    </div>

                    {/* Contact Support */}
                    <div className="bg-white rounded-lg shadow-4 p-8 text-center max-w-[400px]">
                        <h3 className="text-2xl font-bold text-black mb-4">
                            Contact Support
                        </h3>
                        <p className="text-lg text-grey-2 mb-6 leading-relaxed">
                            Using Tafuri HR and need help?
                            Get instant support—just reach
                            out to us anytime!
                        </p>
                        <a
                            href="mailto:support@tafurihr.com"
                            className="block text-blue hover:text-blue-600 font-bold text-lg"
                        >
                            support@tafurihr.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}