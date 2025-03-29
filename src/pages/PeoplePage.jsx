import ImageBlur from "@components/ImageBlur";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import React from "react";
import { useLoaderData } from "react-router-dom";

const GENDER_MAPPING = {
  0: "Not set/ not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};

const PeoplePage = () => {
  const data = useLoaderData();

  return (
    <div className="bg-black text-white">
      <div className="container lg:w-11/12">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <ImageBlur
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${data.profile_path}`}
              width={900}
              height={600}
              alt=""
              className="mb-6 rounded p-4 md:p-0"
            />
            <div>
              <p className="mb-6 text-lg font-bold">Personal Info</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Known for</p>
                  <p>{data.known_for_department}</p>
                </div>

                <div>
                  <p className="font-semibold">Gender</p>
                  <p>{GENDER_MAPPING[data.gender]}</p>
                </div>

                <div>
                  <p className="font-semibold">Place of birth</p>
                  <p>{data.place_of_birth}</p>
                </div>

                <div>
                  <p className="font-semibold">Birthday</p>
                  <p>{data.birthday ? data.birthday : "No info"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <p className="mb-6 text-2xl font-bold">{data.name}</p>
            <div className="mb-6">
              <p className="mb-4 text-lg font-bold">Biography</p>
              <p className="whitespace-pre-line">{data.biography}</p>
            </div>
            <RelatedMediaList
              title="Known for"
              dataRelated={data.combined_credits.cast || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
