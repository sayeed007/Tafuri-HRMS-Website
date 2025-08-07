// src/app/features/page.tsx
import React from 'react';
import Link from 'next/link'; // Use next/link for navigation
import featuresData from '../../data/features/features.json';

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-merriweather text-black mb-6">
                        Powerful HR Features
                    </h1>
                    <p className="text-xl text-gray-3 max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive suite of HR management tools designed to streamline
                        your workforce operations and boost productivity across your organization.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {featuresData.features.map((feature, index) => (
                        <Link
                            key={feature.slug}
                            href={`/features/${feature.slug}`}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Feature Icon Placeholder */}
                            {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                            </div> */}

                            {/* Feature Content */}
                            <h3 className="text-xl font-bold font-merriweather text-black mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.name}
                            </h3>
                            <p className="text-gray-3 text-sm leading-relaxed mb-4">
                                {feature.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                                Learn more
                                <svg
                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}