import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInfor from "@components/MediaDetail/MovieInfor";
import useFetch from "@hooks/useFetch";
import TVShowInfor from "@components/MediaDetail/TVShowInfor";
import SessionList from "@components/MediaDetail/SeasonsList";

const TVShowDetail = () => {
  const { movieId } = useParams();
  const [dataTVDetail, setDataTVDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [certification, setCertification] = useState("");
  const [crew, setCrew] = useState([]);
  const [isRelatedLoading, setIsRelatedLoading] = useState(false);
  const [dataRelated, setDataRelated] = useState([]);

  const { isLoading, data: movieDetail } = useFetch({
    url: `/tv/${movieId}?append_to_response=content_ratings,aggregate_credits`,
  });

  useEffect(() => {
    if (!movieDetail) return;
    setDataTVDetail(movieDetail);

    // custom data genres
    let dataGenres = movieDetail.genres.map((genres) => genres.name);
    setGenres(dataGenres.join(", "));

    // data certification
    let dataCertification = movieDetail.content_ratings?.results.find(
      (result) => result.iso_3166_1 === "US",
    )?.rating;
    setCertification(dataCertification);

    // data crew
    let dataCrew = movieDetail.aggregate_credits?.crew
      .filter((crew) => {
        const jobs = crew.jobs.map((job) => job.job);
        return ["Director", "Writer"].some((job) =>
          jobs.find((j) => j === job),
        );
      })
      .map((crew) => ({
        id: crew.id,
        name: crew.name,
        job: crew.jobs[0].job,
      }));
    const groupedCrew = groupBy(dataCrew, "job");
    setCrew(groupedCrew);
  }, [movieDetail, isLoading, movieId]);

  const { isLoading: isLoadingRelated, data: dataRelatedFetch } = useFetch({
    url: `/tv/${movieId}/recommendations`,
    method: "GET",
  });

  useEffect(() => {
    if (!dataRelatedFetch) return;
    const slicedData = dataRelatedFetch.results.slice(0, 12);
    setDataRelated(slicedData);
    setIsRelatedLoading(isLoadingRelated);
  }, [dataRelatedFetch, movieId, isLoadingRelated]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner
        title={dataTVDetail.name}
        backdropPath={dataTVDetail.backdrop_path}
        posterPath={dataTVDetail.poster_path}
        releaseDate={dataTVDetail.first_air_date}
        overview={dataTVDetail.overview}
        point={dataTVDetail.vote_average}
        genres={genres}
        certification={certification}
        crew={crew}
      />
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-6 py-10 md:flex-row md:gap-10">
          <div className="order-2 md:order-1 md:flex-[2]">
            <ActorList
              actors={(dataTVDetail.aggregate_credits?.cast || []).map(
                (actor) => ({
                  ...actor,
                  character: actor.roles[0]?.character,
                  episode_count: actor.roles[0]?.episode_count,
                }),
              )}
            />
            {isRelatedLoading ? (
              <Loading />
            ) : (
              <>
                <SessionList seasons={dataTVDetail.seasons} />
                <RelatedMediaList dataRelated={dataRelated} />
              </>
            )}
          </div>
          <div className="order-1 md:order-2 md:flex-[1]">
            <TVShowInfor TVShowInfor={dataTVDetail} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TVShowDetail;
