function AISummary({ summary }) {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mb-6">
      <h4 className="font-semibold text-indigo-700 mb-1">AI Summary</h4>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
}

export default AISummary;