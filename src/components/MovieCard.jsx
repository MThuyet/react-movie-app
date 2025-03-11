import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";

const MovieCard = (props) => {
  const { data, type } = props;
  return (
    <div className="relative rounded-lg border border-slate-800">
      {type === "tv" && (
        <div className="absolute top-0 right-0 z-10 rounded-lg bg-slate-900 px-2 py-1 text-sm text-slate-100">
          TV Show
        </div>
      )}
      <Link to={`/${type}/${data.id}`}>
        <img
          className="w-full rounded-lg"
          width={200}
          height={300}
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
        />
      </Link>
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressBar
          percent={Math.round(data.vote_average * 10)}
          strokeColor={
            data.vote_average >= 7
              ? "green"
              : data.vote_average >= 5
                ? "orange"
                : "red"
          }
        />
        <p className="mt-2 text-[14px] font-bold sm:text-[1.6vw] md:text-[1.4vw] lg:text-[1.2vw]">
          {data.title || data.name}
        </p>
        <p className="mt-1 text-[12px] text-slate-300 sm:text-[1.4vw] md:text-[1.1vw]">
          {data.release_date || data.first_air_date}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;
