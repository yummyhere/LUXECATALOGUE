import "./CartSection.css";

export default function CartSection({ cart, setCart }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  if (cart.length === 0) return null;

  return (
    <section className="cart-section">
      <div className="cart-section-inner">
        <div className="cart-header">
          <div className="cart-title-row">
            <h2 className="cart-title">
              <span>◆</span> Your Cart
            </h2>
            <span className="cart-item-count">{totalItems} items</span>
          </div>
          <button className="clear-btn" onClick={clearCart}>
            Clear All
          </button>
        </div>

        <div className="cart-content">
          {/* Items List */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-cat">{item.category}</p>
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-unit">${item.price} each</p>
                </div>
                <div className="cart-item-controls">
                  <div className="qty-ctrl">
                    <button onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, +1)}>+</button>
                  </div>
                  <p className="cart-item-subtotal">${(item.price * item.qty).toFixed(2)}</p>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-rows">
              <div className="summary-row">
                <span>Subtotal ({totalItems} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className={total >= 100 ? "free" : ""}>{total >= 100 ? "FREE" : "$9.99"}</span>
              </div>
              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>
              <span>${(total + (total >= 100 ? 0 : 9.99) + total * 0.08).toFixed(2)}</span>
            </div>

            {total < 100 && (
              <p className="free-shipping-hint">
                🚚 Add ${(100 - total).toFixed(2)} more for FREE shipping!
              </p>
            )}

            <button className="checkout-btn">
              Proceed to Checkout →
            </button>

            <div className="secure-badge">🔒 Secure & Encrypted Checkout</div>
          </div>
        </div>
      </div>
    </section>
  );
}