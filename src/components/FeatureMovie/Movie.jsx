import { FaPlay } from "react-icons/fa";

const Movie = () => {
  return (
    <>
      <img
        src="https://afamilycdn.com/150157425591193600/2021/10/4/phim-kingdom-vuong-trieu-xac-song-phan-1-2-full-hd-vietsub-1-16333243807721978567362-0-0-394-630-crop-1633326547679730083843.jpg"
        alt="Banner"
        className="aspect-video w-full object-cover brightness-50"
      />
      <div className="absolute bottom-[20%] left-9 w-1/2 sm:w-1/3 md:top-[20%]">
        <p className="mb-2 font-bold sm:text-[2vw]">King Dom 2</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">2025-03-03</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              "Kingdom: Ashin of the North" is a special prequel to Kingdom,
              uncovering the origins of the zombie outbreak. The story follows
              Ashin, a woman seeking revenge after a tragic betrayal, as she
              discovers the dark secrets behind the resurrection plant. With
              gripping action and eerie suspense, the film expands the Kingdom
              universe in a haunting way.
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <button className="flex cursor-pointer items-center gap-1 rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg">
            <FaPlay />
            Trailer
          </button>
          <button className="cursor-pointer rounded bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </>
  );
};
export default Movie;
