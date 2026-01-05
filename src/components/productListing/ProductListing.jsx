import { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import styles from "./ProductListing.module.css";

function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Women", "Man"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.productListing}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;


