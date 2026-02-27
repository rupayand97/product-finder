export const askAI = async (query, products) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();

      const matched = products.filter((p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.tags.some((tag) => lowerQuery.includes(tag))
      );

      resolve({
        productIds: matched.map((p) => p.id),
        summary:
          matched.length > 0
            ? `Found ${matched.length} products related to "${query}".`
            : `No products matched "${query}".`
      });
    }, 800);
  });
};