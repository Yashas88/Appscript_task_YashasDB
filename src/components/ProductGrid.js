import ProductCard from "./ProductCard";

const NEW_PRODUCT_IDS = new Set([1, 3, 7, 15]);

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="product-grid-empty">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isNew={NEW_PRODUCT_IDS.has(product.id)}
        />
      ))}
    </div>
  );
}
