import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInfor from "@components/MediaDetail/MovieInfor";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [dataMovieDetail, setDataMovieDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [certification, setCertification] = useState("");
  const [crew, setCrew] = useState([]);
  const [isRelatedLoading, setIsRelatedLoading] = useState(false);
  const [dataRelated, setDataRelated] = useState([]);

  const { isLoading, data: movieDetail } = useFetch({
    url: `/movie/${movieId}?append_to_response=release_dates,credits,videos`,
  });

  useEffect(() => {
    if (!movieDetail) return;
    setDataMovieDetail(movieDetail);

    // custom data genres
    let dataGenres = movieDetail.genres.map((genres) => genres.name);
    setGenres(dataGenres.join(", "));

    // data certification
    let dataCertification = movieDetail.release_dates?.results
      .find((result) => result.iso_3166_1 === "US")
      ?.release_dates.find(
        (release_date) => release_date.certification,
      )?.certification;
    setCertification(dataCertification);

    // data crew
    let dataCrew = movieDetail.credits?.crew
      .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
      .map((crew) => ({
        id: crew.id,
        name: crew.name,
        job: crew.job,
      }));
    const groupedCrew = groupBy(dataCrew, "job");
    setCrew(groupedCrew);
  }, [movieDetail, isLoading, movieId]);

  const { isLoading: isLoadingRelated, data: dataRelatedFetch } = useFetch({
    url: `/movie/${movieId}/recommendations`,
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
        title={dataMovieDetail.title}
        backdropPath={dataMovieDetail.backdrop_path}
        posterPath={dataMovieDetail.poster_path}
        releaseDate={dataMovieDetail.release_date}
        overview={dataMovieDetail.overview}
        point={dataMovieDetail.vote_average}
        genres={genres}
        certification={certification}
        crew={crew}
        trailerKey={
          dataMovieDetail.videos?.results.find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-white">
        <div className="container flex-col md:flex-row md:gap-10">
          <div className="order-2 md:order-1 md:flex-[2]">
            <ActorList actors={dataMovieDetail.credits?.cast || []} />
            {isRelatedLoading ? (
              <Loading />
            ) : (
              <RelatedMediaList
                dataRelated={dataRelated}
                title="More like this"
              />
            )}
          </div>
          <div className="order-1 md:order-2 md:flex-[1]">
            <MovieInfor movieInfor={dataMovieDetail} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetail;
