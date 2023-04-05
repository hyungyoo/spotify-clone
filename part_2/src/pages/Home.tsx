import React from "react";
import useSWRImmutable from "swr/immutable";

const usePlaylistsBySearch = (searchValue: string) => {
  const { data, isLoading, error } = useSWRImmutable(
    `https://api.spotify.com/v1/search?q=${searchValue}&type=playlist`
  );
  return {
    playlists: data?.playlists?.items,
    isLoading,
    isError: error,
  };
};

export const Home = () => {
  const { playlists, isError, isLoading } = usePlaylistsBySearch("Taylor");

  console.log(playlists);
  return <div></div>;
};
