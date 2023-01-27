import { Link } from "react-router-dom"

export default function MovieCard() {
    const movies = [
        {photo: 'images/image.jpeg', title: 'santan dave', id: 1},
        {photo: 'images/image.jpeg', title: 'santan dave', id: 2},
        {photo: 'images/image.jpeg', title: 'santan dave', id: 3},
        {photo: 'images/image.jpeg', title: 'santan dave', id: 4}
    ]

  return (
    <div className='grid grid-cols-4 gap-4 w-[80%] mx-auto py-7'>
        {movies.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className="bg-[#121212] p-5 hover:scale-105 ease-in duration-300"
        >
          <img src={movie.photo} alt="alt for movie" />
          <p className="text-center cursor-pointer text-white text-opacity-70 text-xl pt-3 font-bold">
            {movie.title}
          </p>
        </Link>
      ))}
    </div>
  )
}