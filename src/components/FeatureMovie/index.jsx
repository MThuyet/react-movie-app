import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const [movies, setMovies] = useState([]);

  const { data } = useFetch({
    url: "/movie/popular",
  });

  const { data: dataVideo } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );

  useEffect(() => {
    if (!data) return;
    const popularMovie = data.results.slice(0, 4);
    setMovies(popularMovie);
    setActiveMovieId(popularMovie[0].id);
  }, [data]);

  return (
    <div className="relative text-white">
      {movies && movies.length > 0 ? (
        movies
          .filter((movie) => movie.id === activeMovieId)
          .map((movie) => (
            <Movie
              key={movie.id}
              data={movie}
              trailerKey={
                dataVideo?.results.find(
                  (video) =>
                    video.type === "Trailer" && video.site === "YouTube",
                )?.key
              }
            />
          ))
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
