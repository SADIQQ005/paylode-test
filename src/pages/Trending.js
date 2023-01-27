import React, { useEffect, useState } from "react";
import Popular from "../components/TrendingCard";

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    const check = localStorage.getItem("trending");
    if (check) {
      setMovies(JSON.parse(check));
    } else {
      try {
        const res = await fetch(
          `https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        localStorage.setItem("trending", JSON.stringify(data.items));
        setMovies(data.items);
      } catch (err) {
        setError(err);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [movies]);

  return <Popular error={error} movies={movies} />;
}
