import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) throw new Error("Failed to fetch quote");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Failed to load quote. Please try again.");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Random Quote Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="text-xl">"{quote}"</p>
          <p className="text-right text-sm font-semibold">- {author}</p>
        </>
      )}
      <button
        onClick={fetchQuote}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
