import MovieCard from "@components/MovieCard";

const RelatedMediaList = (props) => {
  const { dataRelated, title } = props;

  return (
    <div>
      <p className="mb-2 text-[20px] font-bold md:text-[1.8vw] lg:text-[1.4vw]">
        {title}
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {dataRelated?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              data={movie}
              type={movie.media_type || "movie"}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RelatedMediaList;
