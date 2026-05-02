import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ cart, search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">LUXE<span>CATALOGUE</span></span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Collection</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-actions">
          <div className="nav-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="cart-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}