import { useEffect, useRef } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const arrIdMovie = movies.map((movie) => movie.id);
    let index = arrIdMovie.indexOf(activeMovieId);

    if (index === -1) {
      setActiveMovieId(arrIdMovie[0]);
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveMovieId(
        index === arrIdMovie.length - 1 ? arrIdMovie[0] : arrIdMovie[index + 1],
      );
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [movies, activeMovieId]);

  return (
    <div className="absolute top-[2%] left-[50%] -translate-x-1/2">
      <ul className="flex items-center gap-2">
        {movies?.map((movie) => (
          <li
            key={movie.id}
            className={`h-4 w-4 cursor-pointer rounded-[50%] bg-slate-600 ${activeMovieId === movie.id ? "bg-white" : ""}`}
            onClick={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current); // Khi click thì xóa timeout cũ
              }
              setActiveMovieId(movie.id);
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
