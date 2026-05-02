import "./FilterBar.css";

export default function FilterBar({ categories, activeCategory, setActiveCategory, sortBy, setSortBy, count }) {
  return (
    <div className="filterbar">
      <div className="filterbar-inner">
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="filter-right">
          <span className="count">{count} Products</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name: A → Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}