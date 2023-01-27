import React from "react";

export default function SearchBar() {
  return (
    <div className="w-[80%] mx-auto py-7">
      <div className="flex items-center space-x-3">
        <input
          placeholder="search movies"
          className="bg-[#121212] p-2 text-white w-[30rem] rounded-md focus:outline-none focus:outline-4 focus:outline-blue-400"
        />
        <button className="bg-green-600 py-2 px-3 capitalize rounded-md">search</button>
      </div>
    </div>
  );
}
