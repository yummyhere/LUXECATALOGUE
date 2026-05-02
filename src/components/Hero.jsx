import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-grid" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">✦ Premium Collection 2025</p>
        <h1 className="hero-title">
          Discover <span>Exceptional</span><br />Products
        </h1>
        <p className="hero-sub">
          Curated with precision. Crafted for those who demand the finest.
        </p>
        <div className="hero-stats">
          <div className="stat"><span>500+</span><p>Products</p></div>
          <div className="stat-divider" />
          <div className="stat"><span>50+</span><p>Brands</p></div>
          <div className="stat-divider" />
          <div className="stat"><span>24/7</span><p>Support</p></div>
        </div>
      </div>
    </section>
  );
}