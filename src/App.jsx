import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import ProductList from "./components/products/ProductList";
import AskBox from "./components/ai/AskBox";
import AISummary from "./components/ai/AISummary";
import { fetchProducts } from "./services/productService";
import { askAI } from "./services/aiService";

function App() {
  const [collapsed, setCollapsed] = useState(false);

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
    <div className="min-h-screen">
      <Header />
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content */}
      <main
        className={`absolute top-[62px] right-0 bottom-0 
        p-6 overflow-y-auto transition-all duration-300 
        bg-[#071e2a]
        ${collapsed ? "left-16" : "left-56"}`}
      >
        <AskBox onAsk={handleAsk} />

        {loading && (
          <p className="text-center text-green-600 mt-4">
            AI is thinking...
          </p>
        )}

        {summary && <AISummary summary={summary} />}

        <ProductList products={displayProducts} />
      </main>
    </div>
  );
}

export default App;