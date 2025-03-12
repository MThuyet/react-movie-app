import ImageBlur from "@components/ImageBlur";

const ActorInfo = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-col rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageBlur
        className="rounded-t-lg"
        src={
          data.profile_path
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${data.profile_path}`
            : "/ActorNoImage.svg"
        }
        alt=""
        width={276}
        height={350}
      />
      <div className="flex flex-1 flex-col items-stretch p-3">
        <p className="flex-1 font-bold sm:text-[1.5vw] md:text-[1vw]">
          {data.name}
        </p>
        <p className="flex-1 sm:text-[1.2vw] md:text-[0.9vw]">
          {data.character}
        </p>
        <p className="flex-1 sm:text-[1.2vw] md:text-[0.9vw]">
          {data.episode_count} Episode
        </p>
      </div>
    </div>
  );
};
export default ActorInfo;
