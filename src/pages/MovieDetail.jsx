import { FaPlay } from "react-icons/fa";
import CircularProgressBar from "../components/CircularProgressBar";

const MovieDetail = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover brightness-[0.2] sm:h-auto"
        src="https://image.tmdb.org/t/p/original//kEYWal656zP5Q2Tohm91aw6orlT.jpg"
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-8 px-6 py-10 sm:flex-row sm:gap-6">
        <div className="flex-[1]">
          <img
            className="w-full object-cover"
            src="https://image.tmdb.org/t/p/w500//qh8m8Udz0sCa5gy9VaqfHPh0yPM.jpg"
            alt=""
          />
        </div>
        <div className="flex-[2]">
          <p className="mb-5 text-center text-[24px] font-bold sm:mb-10 sm:text-2xl md:text-left lg:text-3xl">
            Anora
          </p>
          <div className="flex items-center gap-4 text-[10px] text-gray-400 md:text-[18px] lg:text-xl">
            <span className="border border-gray-400 px-2 text-gray-400">G</span>
            <p>2024-10-14</p>
            <p>Fantasy, Horror, Love, Sexy</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={80} size={3} />{" "}
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
          <div className="mt-4 sm:mt-10 sm:mb-10">
            <p className="mb-2 text-[14px] font-bold sm:text-[1.3vw]">
              Overview
            </p>
            <p className="text-[14px] text-gray-400 sm:text-[1.6vw] md:text-[1.5vw] lg:text-[1.2vw]">
              A young sex worker from Brooklyn gets her chance at a Cinderella
              story when she meets and impulsively marries the son of an
              oligarch. Once the news reaches Russia, her fairytale is
              threatened as his parents set out to get the marriage annulled.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 text-[12px] sm:gap-2 md:text-[1.6vw] lg:text-xl">
            <div>
              <p className="mb-1.5 font-bold sm:mb-0">Director</p>
              <p className="text-gray-400">Jenifer Lopez</p>
            </div>
            <div>
              <p className="mb-1.5 font-bold sm:mb-0">Writer</p>
              <p className="text-gray-400">Dan Friedman, Rus Sanchez</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
