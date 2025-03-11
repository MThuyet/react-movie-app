import FeatureMovie from "../components/FeatureMovie"; // mắc định lấy file index
import MediaList from "../components/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "../libs/constants";

function HomePage() {
  return (
    <>
      <FeatureMovie />
      <MediaList title="Top Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </>
  );
}

export default HomePage;
