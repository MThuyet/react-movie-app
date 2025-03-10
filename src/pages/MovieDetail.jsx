import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";

const MovieDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [dataMovieDetail, setDataMovieDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [certification, setCertification] = useState("");
  const [crew, setCrew] = useState([]);

  const fetchMovieDetail = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=release_dates,credits`,
        {
          accept: "application/json",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDZjN2MxY2YzMzkyMjg2ZWM5MTgwNTMyYjgzYzI2MSIsIm5iZiI6MTc0MDk4MjM4MS45OTQsInN1YiI6IjY3YzU0ODZkNTY0ZDI1NzVkOTkxZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lyoglfRZZoNuu3QN8-RcSWMZCoPthTNlpJgEhsUM-R8",
          },
        },
      );

      const data = await res.json();
      if (data) {
        setDataMovieDetail(data);

        // custom data genres
        let dataGenres = data.genres.map((genres) => genres.name);
        setGenres(dataGenres.join(", "));

        // data certification
        let dataCertification = data.release_dates?.results
          .find((result) => result.iso_3166_1 === "US")
          ?.release_dates.find(
            (release_date) => release_date.certification,
          )?.certification;
        setCertification(dataCertification);

        // data crew
        let dataCrew = data.credits?.crew
          .filter((crew) =>
            ["Director", "Screenplay", "Writer"].includes(crew.job),
          )
          .map((crew) => ({
            id: crew.id,
            name: crew.name,
            job: crew.job,
          }));
        const groupedCrew = groupBy(dataCrew, "job");
        setCrew(groupedCrew);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner
        dataMovieDetail={dataMovieDetail}
        genres={genres}
        certification={certification}
        crew={crew}
      />
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 py-10 md:flex-row">
          <div className="md:flex-[2]">
            <ActorList actors={dataMovieDetail.credits?.cast || []} />
            <RelatedMediaList />
          </div>
          <div className="md:flex-[1]">
            <p className="mb-2 font-bold md:text-[1.4vw]">Information</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetail;
