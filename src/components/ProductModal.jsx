import { useState, useEffect } from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>★</span>
  ));

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-grid">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
            {discount && <div className="modal-discount-tag">−{discount}%</div>}
          </div>

          <div className="modal-info">
            <p className="modal-category">{product.category}</p>
            <h2 className="modal-title">{product.name}</h2>

            <div className="modal-rating">
              {stars}
              <span>{product.rating} · {product.reviews} reviews</span>
            </div>

            <p className="modal-description">{product.description}</p>

            <div className="modal-price-row">
              <span className="modal-price">${product.price}</span>
              {product.originalPrice && (
                <span className="modal-original">${product.originalPrice}</span>
              )}
              {discount && <span className="modal-badge">Save {discount}%</span>}
            </div>

            {product.features && (
              <ul className="modal-features">
                {product.features.map((f, i) => (
                  <li key={i}><span>✦</span> {f}</li>
                ))}
              </ul>
            )}

            <div className="modal-actions">
              <div className="qty-control">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className={`modal-add-btn ${added ? "added" : ""}`} onClick={handleAdd}>
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            <p className="modal-shipping">🚚 Free shipping on orders over $100</p>
          </div>
        </div>
      </div>
    </div>
  );
}