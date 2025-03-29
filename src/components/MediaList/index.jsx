import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";
import { useEffect, useState } from "react";

const MediaList = (props) => {
  const { title, tabs } = props;
  const [mediaList, setMediaList] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const url = tabs.find((tab) => tab.id === activeTab)?.url;
  const { data } = useFetch({ url });

  useEffect(() => {
    if (!data) return;
    const slicedData = data.results.slice(0, 12);
    setMediaList(slicedData);
  }, [data, url]);

  if (!url) return null;
  if (!data) return;

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[16px] font-bold sm:text-[2vw]">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((item) => {
            return (
              <li
                onClick={() => setActiveTab(item.id)}
                key={item.id}
                className={`cursor-pointer px-4 py-1 text-[10px] text-nowrap sm:text-[1.5vw] md:text-[1.2vw] ${item.id === activeTab && "bg-white text-black"}`}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              data={movie}
              type={movie.media_type || activeTab}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MediaList;
