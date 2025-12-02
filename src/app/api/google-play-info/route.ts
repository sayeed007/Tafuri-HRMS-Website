// app/api/google-play-info/route.ts
import { NextResponse } from "next/server";
import gplay from "google-play-scraper";
import { GooglePlayInfo, GooglePlayAPIResponse } from "@/types/googlePlay";

const APP_ID = "com.shb007.crossplatformhrmerpfrontend";

// Cache configuration
let cachedData: GooglePlayInfo | null = null;
let lastFetch = 0;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Fallback data in case API fails
const FALLBACK_DATA: GooglePlayInfo = {
    name: "Tafuri HR",
    icon: "/icons/app-icon.png",
    url: "https://play.google.com/store/apps/details?id=" + APP_ID,
    rating: 5.0,
    ratingText: "5.0",
    ratingsCount: 12,
    installs: "10,000+",
    price: "Free",
    description: "Comprehensive HR Management System",
    genre: "Business",
    developer: "Tafuri Technologies",
};

export async function GET() {
    try {
        const now = Date.now();

        // Return cached data if still fresh
        if (cachedData && now - lastFetch < CACHE_TTL_MS) {
            const response: GooglePlayAPIResponse = {
                data: cachedData,
                error: null,
                cached: true,
                lastUpdated: lastFetch,
            };
            return NextResponse.json(response);
        }

        // Fetch fresh data from Google Play
        const appData = await gplay.app({
            appId: APP_ID,
            lang: "en",
            country: "us",
        });

        // Map and validate the data
        cachedData = {
            name: appData.title || FALLBACK_DATA.name,
            icon: appData.icon || FALLBACK_DATA.icon,
            url: appData.url || FALLBACK_DATA.url,
            rating: typeof appData.score === 'number' ? appData.score : FALLBACK_DATA.rating,
            ratingText: appData.scoreText || FALLBACK_DATA.ratingText,
            ratingsCount: appData.ratings || FALLBACK_DATA.ratingsCount,
            installs: appData.installs || FALLBACK_DATA.installs,
            price: appData.priceText || FALLBACK_DATA.price,
            description: appData.description,
            shortDescription: appData.summary,
            screenshots: appData.screenshots,
            recentChanges: appData.recentChanges,
            updated: appData.updated,
            version: appData.version,
            minInstalls: appData.minInstalls,
            maxInstalls: appData.maxInstalls,
            reviews: appData.reviews,
            genre: appData.genre,
            developer: appData.developer,
            developerEmail: appData.developerEmail,
        };

        lastFetch = now;

        const response: GooglePlayAPIResponse = {
            data: cachedData,
            error: null,
            cached: false,
            lastUpdated: lastFetch,
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error("Google Play Scraper Error:", error);

        // Return fallback data with error information
        const response: GooglePlayAPIResponse = {
            data: cachedData || FALLBACK_DATA,
            error: error instanceof Error ? error.message : "Failed to fetch Google Play info",
            cached: !!cachedData,
            lastUpdated: lastFetch,
        };

        return NextResponse.json(response, { status: cachedData ? 200 : 500 });
    }
}
