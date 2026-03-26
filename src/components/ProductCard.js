import { useState } from "react";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x400?text=No+Image";

export default function ProductCard({ product, isNew }) {
  const [wishlisted, setWishlisted] = useState(false);

  const { title, price, image, rating, category } = product ?? {};
  const displayPrice = price ?? 0;
  const displayTitle = title ?? "Untitled Product";
  const displayImage = image || PLACEHOLDER_IMAGE;
  const ratingRate = rating?.rate ?? 0;
  const ratingCount = rating?.count ?? 0;

  const handleImageError = (e) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  return (
    <article className="product-card">
      {isNew && <span className="product-badge">NEW PRODUCT</span>}
      <div className="product-card-image">
        <img
          src={displayImage}
          alt={displayTitle}
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      <div className="product-card-info">
        <h2 className="product-card-title">{displayTitle}</h2>
        {ratingRate > 0 && (
          <div className="product-card-rating">
            <span className="product-card-star">⭐</span>
            <span className="product-card-rate">{ratingRate.toFixed(1)}</span>
            <span className="product-card-count">({ratingCount})</span>
          </div>
        )}
        <div className="product-card-bottom">
          <span className="product-card-price">₹ {displayPrice.toFixed(2)}</span>
          <button
            className={`product-card-wishlist${wishlisted ? " wishlisted" : ""}`}
            onClick={() => setWishlisted((prev) => !prev)}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg
              viewBox="0 0 24 24"
              fill={wishlisted ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
