import { Link } from "react-router-dom";

export default function SeriesCard({ series, error }) {
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 w-[80%] mx-auto py-7">
      {series.length === 0
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((loading, index) => (
            <div
              key={index}
              className="animate-pulse bg-[#121212] h-[22rem]"
            ></div>
          ))
        : series.map((show) => (
            <Link
              to={`/movie/${show.id}`}
              key={show.id}
              className="bg-[#121212] p-5 hover:scale-105 ease-in duration-300"
            >
              <div className="flex flex-col">
                <img src={show.image} alt="alt for movie" />
                <p className="text-center cursor-pointer text-white text-opacity-70 text-xl pt-3 font-bold">
                  {show.title}
                </p>
              </div>
            </Link>
          ))}
    </div>
  );
}
