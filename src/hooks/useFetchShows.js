import { useState, useEffect } from 'react';

export const useFetchShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.tvmaze.com/shows');
      const data = await res.json();
      setShows(data.slice(0, 20));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

  return { shows, loading, error };
};
