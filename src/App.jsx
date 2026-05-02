import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import CartSection from "./components/CartSection";
import Footer from "./components/Footer";
import { products } from "./products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products
    .filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="app">
      <Navbar cart={cart} search={search} setSearch={setSearch} />
      <Hero />
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        count={filtered.length}
      />
      <ProductGrid
        products={filtered}
        onSelect={setSelectedProduct}
        onAddToCart={addToCart}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
      <CartSection cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;