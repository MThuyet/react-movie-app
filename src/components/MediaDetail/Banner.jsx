import ImageBlur from "@components/ImageBlur";
import CircularProgressBar from "../CircularProgressBar";
import { FaPlay } from "react-icons/fa";
import { useModalContext } from "@context/ModalProvider";

const Banner = (props) => {
  const {
    genres,
    certification,
    crew,
    title,
    backdropPath,
    posterPath,
    releaseDate,
    point = 0,
    overview,
    trailerKey,
  } = props;

  const { openPopup } = useModalContext();

  return (
    <>
      <div className="relative overflow-hidden text-white shadow-sm shadow-slate-800">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-[0.2]"
          src={
            backdropPath
              ? `https://image.tmdb.org/t/p/original/${backdropPath}`
              : "/ActorNoImage.svg"
          }
          alt=""
        />
        <div className="relative mx-auto flex max-w-screen-xl flex-col gap-8 px-6 py-10 sm:flex-row sm:gap-6">
          <div className="flex-[1]">
            <ImageBlur
              className="w-full object-cover"
              src={
                posterPath &&
                `https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath}`
              }
              alt=""
              width={600}
              height={900}
            />
          </div>
          <div className="flex-[2]">
            <p className="mb-5 text-center text-[20px] font-bold sm:mb-8 sm:text-left sm:text-xl lg:text-3xl">
              {title}
            </p>
            <div className="flex items-center gap-4 text-[10px] text-gray-400 sm:text-[12px] md:text-[16px] lg:text-xl">
              <span className="border border-gray-400 px-2 text-gray-400">
                {certification}
              </span>
              <p>{releaseDate}</p>
              <p>Genres: {genres}</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CircularProgressBar
                  percent={Math.round(point * 10)}
                  size={3}
                />{" "}
                <span className="text-[12px] text-gray-400 lg:text-[1.1vw]">
                  Rating
                </span>
              </div>
              <button
                onClick={() => {
                  openPopup(
                    <iframe
                      allowFullScreen
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${trailerKey}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                    ></iframe>,
                  );
                }}
                className="flex cursor-pointer items-center gap-1 rounded border px-2 py-1 sm:px-2 sm:py-1 md:px-2.5 md:py-1.5"
              >
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
                {overview}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 text-[12px] sm:gap-2 md:text-[1.4vw]">
              {Object.keys(crew).map((job) => (
                <div key={job}>
                  <p className="mb-1.5 font-bold sm:mb-0">{job}</p>
                  <p className="text-gray-400 sm:text-[1.1vw] md:text-[1.2vw]">
                    {crew[job].map((crew) => crew.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
