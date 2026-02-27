function ProductCard({ product }) {
  return (
    <div className="bg-[#0d2a38] rounded-2xl overflow-hidden shadow-lg 
                    border border-gray-800
                    transform transition duration-300 
                    hover:scale-[1.03] hover:shadow-2xl">

      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-400 mb-1">
          {product.category}
        </p>

        <p className="text-emerald-400 font-bold text-lg mb-3">
          ₹{product.price}
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;