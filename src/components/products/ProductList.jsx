import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No products found.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;