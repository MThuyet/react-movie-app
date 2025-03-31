import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useState } from "react";

const SearchPage = () => {
  const [searchFormValue, setSearchFormValue] = useState({
    media_type: "movie",
    genres: [],
    rating: "all",
  });

  const [minRating, maxRating] =
    searchFormValue.rating === "All"
      ? [0, 100]
      : searchFormValue.rating.split(" - ");

  const { data } = useFetch({
    url: `/discover/${searchFormValue.media_type}?with_genres=${searchFormValue.genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });

  return (
    <div className="">
      <div className="container flex-col">
        <p className="text-2xl font-bold">Search</p>
        <div className="flex gap-6">
          <div className="mt-2 flex-1 text-[14px]">
            <SearchForm setSearchFormValue={setSearchFormValue} />
          </div>
          <div className="flex-3">
            <RelatedMediaList dataRelated={data?.results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
