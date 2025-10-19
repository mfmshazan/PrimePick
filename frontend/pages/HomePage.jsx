import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { FiShoppingBag, FiPlusCircle, FiFilter } from "react-icons/fi";

const CATEGORIES = [
  'All',
  'Shoes',
  'Watches',
  'Electronics',
  'Clothing',
  'Accessories',
  'Sports',
  'Books',
  'Home & Kitchen',
  'Beauty',
  'Other'
];

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="home-page">
      <div className="page-header">
        <h1 className="page-title">
          <FiShoppingBag className="title-icon" />
          Our Products
        </h1>
        <p className="page-subtitle">
          Discover our amazing collection of products
        </p>
      </div>

      {/* Category Filter */}
      <div className="category-filter-section">
        <div className="filter-header">
          <FiFilter className="filter-icon" />
          <h3>Filter by Category</h3>
        </div>
        <div className="category-filters">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category !== 'All' && (
                <span className="category-count">
                  {products.filter(p => p.category === category).length}
                </span>
              )}
              {category === 'All' && (
                <span className="category-count">{products.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <FiShoppingBag />
          </div>
          <h2>No Products Found</h2>
          <p>
            {selectedCategory === 'All' 
              ? 'Get started by adding your first product!' 
              : `No products found in ${selectedCategory} category.`}
          </p>
          <Link to="/create" className="btn-primary">
            <FiPlusCircle />
            Add Your First Product
          </Link>
        </div>
      ) : (
        <>
          <div className="results-info">
            <p>
              Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
