import React from "react";
import { useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";

export const Detail = () => {
  const { data, isLoading, error } = useSWRImmutable(
    "https://api.spotify.com/v1/playlists/4EmsQV6bxL1tQ13bzZ2YoC"
  );

  console.log("playlist detail", data);
  const { id } = useParams();
  return <div>{id}</div>;
};
