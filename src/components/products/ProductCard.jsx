function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-5">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

      <p className="text-sm text-gray-500 mb-1">
        Category: {product.category}
      </p>

      <p className="text-indigo-600 font-bold mb-2">
        ₹{product.price}
      </p>

      <p className="text-gray-600 text-sm">
        {product.description}
      </p>
    </div>
  );
}

export default ProductCard;