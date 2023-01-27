import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const [topMovies, setTopMovies] = useState([])
  const [error, setError] = useState("");

  const getMovies = async () => {
    const check = localStorage.getItem("movies");
    if (check) {
      setTopMovies(JSON.parse(check));
    } else {
      try {
        const res = await fetch(
          `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        localStorage.setItem("movies", JSON.stringify(data.items));
        setTopMovies(data.items);
      } catch (err) {
        setError(err);
      }
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <MovieCard topMovies={topMovies} error={error} />
    </div>
  );
}
