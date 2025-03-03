import CircularProgressBar from "./CircularProgressBar";

const MovieCard = () => {
  return (
    <div className="rounded-lg border border-slate-800">
      <img
        className="rounded-lg"
        src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        alt=""
      />
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressBar />
        <p className="mt-2 text-[1.8vw] font-bold sm:text-[1vw]">
          Kingdom of the Planet of the Apes
        </p>
        <p className="mt-1 text-slate-300 md:text-[0.9vw]">2025-03-03</p>
      </div>
    </div>
  );
};
export default MovieCard;
