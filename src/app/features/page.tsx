// src/app/features/page.tsx (Server Component)
import React from 'react';
import featuresData from '../../data/features/features.json';
import FeaturesPageClient from '@/components/FeaturesPageClient';

export default function FeaturesPage() {
    return <FeaturesPageClient data={featuresData} />;
}