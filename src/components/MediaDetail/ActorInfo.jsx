import ImageBlur from "@components/ImageBlur";

const ActorInfo = (props) => {
  const { data } = props;

  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageBlur
        className="rounded-lg"
        src={
          data.profile_path
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${data.profile_path}`
            : "/ActorNoImage.svg"
        }
        alt=""
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold sm:text-[1.5vw] md:text-[1vw]">{data.name}</p>
        <p className="sm:text-[1.2vw] md:text-[0.9vw]">{data.character}</p>
        {/* <p>18</p> */}
      </div>
    </div>
  );
};
export default ActorInfo;
