import { useState, useEffect } from 'react';

function useNewsData (category) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
        const apiUrl = `https://newsapi.org/v2/everything?q=${category ? `${category}` : "top"}&from=2024-05-20&sortBy=publishedAt&apiKey=${apiKey}`;
        const url = apiUrl;
        const response = await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        if(data?.articles){
          setNewsData(data?.articles.slice(0, 20));
          setLoading(false);
        }else if(data?.code){
          setError(data)
          setLoading(false);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
        setLoading(false);
      }
    }

    fetchNewsData();

    return () => {
      abortController.abort();
    };
  }, [category]);

  return { newsData, loading, error };
}

export default useNewsData;
