import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
  const fetchListTrending = async () => {
    const res = await fetch("https://api.themoviedb.org/3/trending/all/week", {
      accept: "application/json",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDZjN2MxY2YzMzkyMjg2ZWM5MTgwNTMyYjgzYzI2MSIsIm5iZiI6MTc0MDk4MjM4MS45OTQsInN1YiI6IjY3YzU0ODZkNTY0ZDI1NzVkOTkxZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lyoglfRZZoNuu3QN8-RcSWMZCoPthTNlpJgEhsUM-R8",
      },
    });

    const data = await res.json();
    const slicedData = data.results.slice(0, 12);
    setMediaList(slicedData);
  };

  useEffect(() => {
    fetchListTrending();
  }, []);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex rounded border border-white">
          <li className="cursor-pointer bg-white px-4 py-1 text-black">All</li>
          <li className="cursor-pointer px-4 py-1">Movie</li>
          <li className="cursor-pointer px-4 py-1">TV Show</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList?.map((movie) => {
          return <MovieCard key={movie.id} data={movie} />;
        })}
      </div>
    </div>
  );
};
export default MediaList;
