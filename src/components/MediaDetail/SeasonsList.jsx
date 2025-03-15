import CircularProgressBar from "@components/CircularProgressBar";
import ImageBlur from "@components/ImageBlur";
import React from "react";

const SeasonsList = (props) => {
  const { seasons } = props;

  return (
    <div className="mt-8 mb-8">
      <p className="mb-2 text-[20px] font-bold md:text-[1.8vw] lg:text-[1.4vw]">
        Seasons
      </p>
      <div className="space-y-4">
        {seasons &&
          seasons.map((season) => (
            <div
              key={season.id}
              className="flex flex-col gap-4 rounded-lg border border-slate-200 p-3 shadow-md sm:flex-row"
            >
              <ImageBlur
                className="m-auto h-[295px] w-[230px] rounded-lg object-contain sm:m-0 sm:h-[195px] sm:w-[130px]"
                width={130}
                height={195}
                src={`https://image.tmdb.org/t/p/w130_and_h195_face${season.poster_path}`}
                alt=""
              />
              <div className="space-y-1">
                <p className="font-bold">{season.name}</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold">Rating</p>
                  <CircularProgressBar
                    percent={Math.round(season.vote_average * 10)}
                    strokeWidth={0.2}
                  />
                </div>
                <p className="md:text-[1.5vw] lg:text-[1.2vw]">
                  <span className="font-bold">Release Date:</span>{" "}
                  {season.air_date}
                </p>
                <p>{season.episode_count} Episodes</p>
                <p className="md:text-[1.5vw] lg:text-[1.1vw]">
                  {season.overview}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SeasonsList;
