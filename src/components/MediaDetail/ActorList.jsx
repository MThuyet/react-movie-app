import { useState } from "react";
import ActorInfo from "./ActorInfo";
import Loading from "@components/Loading";

const ActorList = (props) => {
  const { actors } = props;
  const [isShowMore, setIsShowMore] = useState(false);

  const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <div className="mb-8">
      <p className="mb-2 font-bold md:text-[1.4vw]">Actor</p>
      <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {currentActors && currentActors.length > 0 ? (
          currentActors.map((actor) => (
            <ActorInfo key={actor.id} data={actor} />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <p
        onClick={() => setIsShowMore(!isShowMore)}
        className="w-fit cursor-pointer rounded border px-3 py-2 text-[14px] hover:bg-white hover:text-black sm:text-[1.4vw] md:text-[1vw]"
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
};
export default ActorList;
