import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `https://imdb-api.com/en/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}/?title=${search}`
      );
      const data = res.json();
      setSearchValue(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] mx-auto py-7">
      <div className="flex items-center space-x-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="search movies"
          className="bg-[#121212] p-2 text-white w-[30rem] rounded-md focus:outline-none focus:outline-4 focus:outline-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 py-2 px-3 capitalize rounded-md"
        >
          search
        </button>
        <p className="text-white">{search}</p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchValue.map((value) => (
          <Link
            to={`/movie/${value.id}`}
            key={value.id}
            className="bg-[#121212] p-5 hover:scale-105 ease-in duration-300"
          >
            <div className="flex flex-col">
              <img src={value.image} alt="alt for movie" />
              <p className="text-center cursor-pointer text-white text-opacity-70 text-xl pt-3 font-bold">
                {value.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
