import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
        accept: "application/json",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
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
      {movies && movies.length > 0 ? (
        movies
          .filter((movie) => movie.id === activeMovieId)
          .map((movie) => <Movie key={movie.id} data={movie} />)
      ) : (
        <Loading />
      )}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovie;
