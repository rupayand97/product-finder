import { useState } from "react";

function AskBox({ onAsk }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onAsk(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Ask : Laptops, Phone, Gaming Devices"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg 
                   bg-gray-800 text-white
                   border border-gray-600 
                   placeholder-white
                   focus:outline-none focus:ring-2 focus:ring-olive-500"
      />

      <button
        type="submit"
        className="px-6 py-2 rounded-lg 
                   bg-[#808000] hover:bg-[#6b8e23]
                   text-white font-medium
                   transition duration-300"
      >
        Ask
      </button>
    </form>
  );
}

export default AskBox;
