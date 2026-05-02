import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">◆ LUXECATALOGUE</span>
          <p>Curated collections for the discerning buyer. Premium quality, exceptional value.</p>
        </div>
        <div className="footer-links">
          <h4>Shop</h4>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">Sale</a>
          <a href="#">Brands</a>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 LuxeCatalogue. All rights reserved.</p>
        <div className="footer-social">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}