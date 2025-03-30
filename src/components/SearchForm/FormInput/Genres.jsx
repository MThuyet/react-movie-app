import useFetch from "@hooks/useFetch";
import React, { useEffect } from "react";
import { useWatch } from "react-hook-form";

const Genres = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "media_type", control });

  const { data } = useFetch(
    {
      url: `/genre/${mediaType}/list`,
    },
    { enabled: mediaType },
  );

  useEffect(() => {
    onChange([]);
  }, [mediaType]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {data &&
        data.genres.map((genre) => (
          <p
            key={genre.id}
            onClick={() => {
              let newValue = [...value];
              if (value.includes(genre.id)) {
                newValue = newValue.filter((gId) => gId !== genre.id);
              } else {
                newValue.push(genre.id);
              }
              onChange(newValue);
            }}
            className={`cursor-pointer rounded border px-2 py-1 ${value.includes(genre.id) ? "bg-black text-white" : ""}`}
          >
            {genre.name}
          </p>
        ))}
    </div>
  );
};

export default Genres;
