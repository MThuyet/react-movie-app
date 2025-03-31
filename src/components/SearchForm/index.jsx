import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaType from "./FormInput/MediaType";
import Genres from "./FormInput/Genres";
import Rating from "./FormInput/Rating";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValue }) => {
  const [searchParam] = useSearchParams();
  const media_type = searchParam.get("media_type");

  const { control, watch } = useForm({
    defaultValues: {
      media_type: ["movie", "tv"].includes(media_type) ? media_type : "movie",
      genres: [],
      rating: "all",
    },
  });

  const formValue = watch();

  useEffect(() => {
    setSearchFormValue(formValue);
  }, [JSON.stringify(formValue)]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <form action="" className="space-y-4">
        <FormField
          name={"media_type"}
          label={"Media Type"}
          control={control}
          Component={MediaType}
        />

        <FormField
          name={"genres"}
          label={"Genres"}
          control={control}
          Component={Genres}
        />

        <FormField
          name={"rating"}
          label={"Rating"}
          control={control}
          Component={Rating}
        />
      </form>
    </div>
  );
};

export default SearchForm;
