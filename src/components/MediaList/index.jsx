import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDZjN2MxY2YzMzkyMjg2ZWM5MTgwNTMyYjgzYzI2MSIsIm5iZiI6MTc0MDk4MjM4MS45OTQsInN1YiI6IjY3YzU0ODZkNTY0ZDI1NzVkOTkxZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lyoglfRZZoNuu3QN8-RcSWMZCoPthTNlpJgEhsUM-R8",
      },
    });

    const data = await res.json();
    const slicedData = data.results.slice(0, 12);
    setMediaList(slicedData);
  };

  useEffect(() => {
    fetchListTrending();
  }, [activeTab]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((item) => {
            return (
              <li
                onClick={() => setActiveTab(item.id)}
                key={item.id}
                className={`cursor-pointer px-4 py-1 ${item.id === activeTab && "bg-white text-black"}`}
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
