import MovieCard from "@components/MovieCard";
import { useEffect, useState } from "react";

const MediaList = (props) => {
  const { title, tabs } = props;
  const [mediaList, setMediaList] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const fetchListTrending = async () => {
    const url = tabs.find((tab) => tab.id === activeTab)?.url;
    if (!url) return;
    const res = await fetch(url, {
      accept: "application/json",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    });

    const data = await res.json();
    const slicedData = data.results.slice(0, 12);
    setMediaList(slicedData);
  };

  useEffect(() => {
    fetchListTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

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
                className={`cursor-pointer px-4 py-1 text-[10px] sm:text-[1.5vw] md:text-[1.2vw] ${item.id === activeTab && "bg-white text-black"}`}
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
