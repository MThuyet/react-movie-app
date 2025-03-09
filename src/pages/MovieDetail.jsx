import { FaPlay } from "react-icons/fa";
import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [dataMovieDetail, setDataMovieDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [certification, setCertification] = useState("");
  const [crew, setCrew] = useState([]);

  const fetchMovieDetail = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=release_dates,credits`,
      {
        accept: "application/json",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDZjN2MxY2YzMzkyMjg2ZWM5MTgwNTMyYjgzYzI2MSIsIm5iZiI6MTc0MDk4MjM4MS45OTQsInN1YiI6IjY3YzU0ODZkNTY0ZDI1NzVkOTkxZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lyoglfRZZoNuu3QN8-RcSWMZCoPthTNlpJgEhsUM-R8",
        },
      },
    );

    const data = await res.json();
    if (data) {
      setDataMovieDetail(data);

      // custom data genres
      let dataGenres = data.genres.map((genres) => genres.name);
      setGenres(dataGenres.join(", "));

      // data certification
      let dataCertification = data.release_dates?.results
        .find((result) => result.iso_3166_1 === "US")
        ?.release_dates.find(
          (release_date) => release_date.certification,
        )?.certification;
      setCertification(dataCertification);

      // data crew
      let dataCrew = data.credits?.crew
        .filter((crew) =>
          ["Director", "Screenplay", "Writer"].includes(crew.job),
        )
        .map((crew) => ({
          id: crew.id,
          name: crew.name,
          job: crew.job,
        }));
      const groupedCrew = groupBy(dataCrew, "job");
      setCrew(groupedCrew);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  return (
    <>
      {dataMovieDetail && (
        <div className="relative overflow-hidden text-white">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-[0.2] sm:h-auto"
            src={`https://image.tmdb.org/t/p/original/${dataMovieDetail.backdrop_path}`}
            alt=""
          />
          <div className="relative mx-auto flex max-w-screen-xl flex-col gap-8 px-6 py-10 sm:flex-row sm:gap-6">
            <div className="flex-[1]">
              <img
                className="w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${dataMovieDetail.poster_path}`}
                alt=""
              />
            </div>
            <div className="flex-[2]">
              <p className="mb-5 text-center text-[24px] font-bold sm:mb-8 sm:text-left sm:text-2xl lg:text-3xl">
                {dataMovieDetail.title}
              </p>
              <div className="flex items-center gap-4 text-[10px] text-gray-400 sm:text-[12px] md:text-[16px] lg:text-xl">
                <span className="border border-gray-400 px-2 text-gray-400">
                  {certification}
                </span>
                <p>{dataMovieDetail.release_date}</p>
                <p>Genres: {genres}</p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CircularProgressBar
                    percent={Math.round(dataMovieDetail.vote_average * 10)}
                    size={3}
                  />{" "}
                  <span className="text-[12px] text-gray-400 lg:text-[1.1vw]">
                    Rating
                  </span>
                </div>
                <button className="flex cursor-pointer items-center gap-1 rounded border px-2 py-1 sm:px-2 sm:py-1 md:px-2.5 md:py-1.5">
                  <FaPlay className="text-[10px]" />
                  <span className="text-[10px] text-gray-400 lg:text-[1.1vw]">
                    Trailer
                  </span>
                </button>
              </div>
              <div className="mt-4 sm:mt-8 sm:mb-8">
                <p className="mb-2 text-[14px] font-bold sm:text-[1.3vw]">
                  Overview
                </p>
                <p className="text-[14px] text-gray-400 sm:text-[1.6vw] md:text-[1.5vw] lg:text-[1.2vw]">
                  {dataMovieDetail.overview}
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 text-[12px] sm:gap-2 md:text-[1.4vw]">
                {Object.keys(crew).map((job) => (
                  <div key={job}>
                    <p className="mb-1.5 font-bold sm:mb-0">{job}</p>
                    <p className="text-gray-400">
                      {crew[job].map((crew) => crew.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetail;
