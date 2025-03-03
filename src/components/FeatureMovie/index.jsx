import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
        accept: "application/json",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDZjN2MxY2YzMzkyMjg2ZWM5MTgwNTMyYjgzYzI2MSIsIm5iZiI6MTc0MDk4MjM4MS45OTQsInN1YiI6IjY3YzU0ODZkNTY0ZDI1NzVkOTkxZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lyoglfRZZoNuu3QN8-RcSWMZCoPthTNlpJgEhsUM-R8",
        },
      });

      const data = await res.json();
      const popularMovie = data.results.slice(0, 4);
      setMovies(popularMovie);
      setActiveMovieId(popularMovie[0].id);
    };

    fetchData();
  }, []);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovie;
