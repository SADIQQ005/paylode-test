import React, { useEffect, useState } from 'react'
import SeriesCard from '../components/SeriesCard'

export default function Series() {

  const [series, setSeries] = useState([])
  const [error, setError] = useState("");

  const getSeries = async () => {
    const check = localStorage.getItem("series");
    if (check) {
      setSeries(JSON.parse(check));
    } else {
      try {
        const res = await fetch(
          `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        localStorage.setItem("series", JSON.stringify(data.items));
        setSeries(data.items);
      } catch (err) {
        setError(err);
      }
    }
  };

  useEffect(() => {
    getSeries();
  }, [series]);

  return (
    <div>
      <SeriesCard series={series} error={error} />
    </div>
  )
}
