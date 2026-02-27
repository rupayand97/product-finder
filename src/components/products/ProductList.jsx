import ProductCard from "./ProductCard";

function ProductList({ products, animate }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-8">
        No products found.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={
            animate
              ? "opacity-0 translate-x-10 animate-[slide_0.6s_ease_forwards]"
              : ""
          }
          style={
            animate
              ? { animationDelay: `${index * 150}ms` }
              : {}
          }
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;