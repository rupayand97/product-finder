import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import AskBox from "../components/ai/AskBox";
import AISummary from "../components/ai/AISummary";
import { fetchProducts } from "../services/productService";
import { askAI } from "../services/aiService";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setDisplayProducts(data);
    };
    loadProducts();
  }, []);

  const handleAsk = async (query) => {
    setLoading(true);
    try {
      const result = await askAI(query, products);
      const filtered = products.filter((p) =>
        result.productIds.includes(p.id)
      );

      setDisplayProducts(filtered);
      setSummary(result.summary);
    } catch {
      setSummary("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-full bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <AskBox onAsk={handleAsk} />

        {loading && (
          <p className="text-center text-blue-600 mt-4">
            AI is thinking...
          </p>
        )}

        {summary && <AISummary summary={summary} />}

        <ProductList products={displayProducts} />
      </div>
    </div>
  );
}

export default Dashboard;