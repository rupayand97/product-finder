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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setDisplayProducts(data);
      setTimeout(() => setAnimate(true), 50);
    };
    loadProducts();
  }, []);

  const handleAsk = async (query) => {
    setAnimate(false);
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
    <div className="w-full">
      <AskBox onAsk={handleAsk} />

      {loading && (
        <p className="text-center text-green-600 mt-4">
          AI is thinking...
        </p>
      )}

      {summary && <AISummary summary={summary} />}

      <ProductList products={displayProducts} animate={animate} />
    </div>
  );
}

export default Dashboard;