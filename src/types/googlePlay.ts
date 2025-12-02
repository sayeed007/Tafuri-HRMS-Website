// types/googlePlay.ts
export interface GooglePlayInfo {
  name: string;
  icon: string;
  url: string;
  rating: number;
  ratingText: string;
  ratingsCount: number;
  installs: string;
  price: string;
  description?: string;
  shortDescription?: string;
  screenshots?: string[];
  recentChanges?: string;
  updated?: number;
  version?: string;
  minInstalls?: number;
  maxInstalls?: number;
  reviews?: number;
  genre?: string;
  developer?: string;
  developerEmail?: string;
}

export interface GooglePlayAPIResponse {
  data: GooglePlayInfo | null;
  error: string | null;
  cached: boolean;
  lastUpdated: number;
}
