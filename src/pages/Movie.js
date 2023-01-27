import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const res = await fetch(
          `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY}/${params.id}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
      console.log(movie);
    };
    getMovieInfo();
  }, [params.id, movie]);

  if (movie === null) {
    return <div className="animate-pulse bg-[#121212] h-[22rem]"></div>;
  }

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex space-x-10 py-8">
        <div>
          <img className="w-96 rounded-md" src={movie.image} alt="" />
        </div>
        <div className="text-white mt-10">
          <h2 className="text-2xl font-bold my-7">{movie.title}</h2>
          <p className="mb-5 text-gray-300">{movie.plot}</p>
          <p className="mb-3 font-bold text-gray-300">
            Release Date: {movie.releaseDate}
          </p>
          <button className="bg-green-600 rounded-lg px-2 py-1 my-3 capitalize text-lg text-black">
            play trailer
          </button>
        </div>
      </div>
      <h2 className="font-bold text-3xl text-white capitalize my-5">casts</h2>

      <div className="grid grid-cols-7 gap-3">
        {/* {movie.actorList.map((cast) => (
        <div key={cast.id} className="my-5 text-center">
          <img
            className="w-32 h-32 rounded-full"
            src={cast.image}
            alt="something is missing"
          />
          <p className="text-white text-lg py-2">{cast.name}</p>
        </div>
        ))} */}
      </div>
    </div>
  );
}
