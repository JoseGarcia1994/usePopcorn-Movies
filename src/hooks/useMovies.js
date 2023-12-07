import { useState, useEffect } from "react";

const key = 'af38a845'

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        setError('');
        const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`, { signal: controller.signal });

        if (!res.ok) throw new Error("Something went wrong with fetching movies")

        const data = await res.json();

        if (data.Response === 'False') throw new Error("Movie not found");

        setMovies(data.Search)
        setError("")
      } catch (err) {
        if (err.name !== "AbortName") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false)
      }
    }

    // If query has less than 3 letters dont run fetchMovies();
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    };

    fetchMovies();
    // Will learn how to pass functions later on
    // handleCloseMovie()

    return () => controller.abort();
  }, [query])

  return {movies, error, isLoading}
}