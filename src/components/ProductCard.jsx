import { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ product, index, onSelect, onAddToCart }) {
  const [added, setAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>★</span>
  ));

  return (
    <div
      className="product-card"
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={() => onSelect(product)}
    >
      <div className="card-badges">
        {product.badge && <span className={`badge badge-${product.badge.toLowerCase()}`}>{product.badge}</span>}
      </div>

      <button
        className={`wishlist-btn ${wishlist ? "active" : ""}`}
        onClick={(e) => { e.stopPropagation(); setWishlist(!wishlist); }}
      >
        ♥
      </button>

      <div className="card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="card-overlay">
          <button className="quick-view-btn" onClick={(e) => { e.stopPropagation(); onSelect(product); }}>
            Quick View
          </button>
        </div>
      </div>

      <div className="card-info">
        <p className="card-category">{product.category}</p>
        <h3 className="card-name">{product.name}</h3>
        <div className="card-rating">
          {stars}
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="card-footer">
          <div className="card-price">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="price">${product.price}</span>
          </div>
          <button
            className={`add-btn ${added ? "added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}