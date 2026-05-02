import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products, onSelect, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">◈</div>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <main className="product-grid-wrapper">
      <div className="product-grid">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            onSelect={onSelect}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}