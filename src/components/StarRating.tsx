// components/StarRating.tsx
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showNumber?: boolean;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  showNumber = true,
  className = ''
}: StarRatingProps) {
  // Ensure rating is within bounds
  const clampedRating = Math.max(0, Math.min(rating, maxRating));

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const difference = clampedRating - i;

      if (difference >= 0) {
        // Full star
        stars.push(
          <Star
            key={i}
            className="text-yellow-400 fill-current"
            style={{ width: size, height: size }}
            aria-hidden="true"
          />
        );
      } else if (difference > -1) {
        // Partial star (half-filled)
        const percentage = (difference + 1) * 100;
        stars.push(
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <Star
              className="text-gray-300 fill-current absolute top-0 left-0"
              style={{ width: size, height: size }}
              aria-hidden="true"
            />
            <div
              className="overflow-hidden absolute top-0 left-0"
              style={{ width: `${percentage}%` }}
            >
              <Star
                className="text-yellow-400 fill-current"
                style={{ width: size, height: size }}
                aria-hidden="true"
              />
            </div>
          </div>
        );
      } else {
        // Empty star
        stars.push(
          <Star
            key={i}
            className="text-gray-300 fill-current"
            style={{ width: size, height: size }}
            aria-hidden="true"
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showNumber && (
        <span className="text-2xl font-bold text-black">
          {clampedRating.toFixed(1)}
        </span>
      )}
      <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`${clampedRating} out of ${maxRating} stars`}
      >
        {renderStars()}
      </div>
    </div>
  );
}
