import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { data } = props;
  return (
    <>
      {data && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            alt="Banner"
            className="aspect-video w-full object-cover brightness-50"
          />
          <div className="absolute bottom-[20%] left-9 w-1/2 sm:w-1/3 md:top-[20%]">
            <p className="mb-2 text-[18px] font-bold sm:text-[2vw]">
              {data.title}
            </p>
            <div>
              <p className="text-[14px] md:text-[1.2vw]">{data.release_date}</p>
            </div>
            <div>
              <div className="mt-4 hidden text-[1.2vw] sm:block">
                <p className="mb-2 font-bold">Overview</p>
                <p>{data.overview}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <button className="flex cursor-pointer items-center gap-1 rounded bg-white px-2 py-2 text-[10px] text-black sm:px-4 lg:text-lg">
                <FaPlay />
                Trailer
              </button>
              <Link to={`/movie/${data.id}`}>
                <button className="cursor-pointer rounded bg-slate-300/35 px-2 py-2 text-[10px] sm:px-4 lg:text-lg">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Movie;
