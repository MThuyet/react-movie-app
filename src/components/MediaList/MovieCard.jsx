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
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt=""
      />
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
        <p className="mt-2 text-[1.8vw] font-bold sm:text-[1vw]">
          {data.title || data.name}
        </p>
        <p className="mt-1 text-slate-300 md:text-[0.9vw]">
          {data.release_date || data.first_air_date}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;
