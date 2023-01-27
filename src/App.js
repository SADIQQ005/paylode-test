import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movie from "./pages/Movie";
import Trending from "./pages/Trending";
import Movies from './pages/Movies'
import Search from './pages/Search'
import Series from './pages/Series'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
