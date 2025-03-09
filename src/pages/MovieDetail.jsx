import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";

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
    </>
  );
};
export default MovieDetail;
