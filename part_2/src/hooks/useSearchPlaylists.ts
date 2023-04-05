import useSWRImmutable from "swr/immutable";

const useSearchPlaylists = (searchValue: string) => {
  const { data, isLoading, error } = useSWRImmutable(
    searchValue === ""
      ? null
      : `https://api.spotify.com/v1/search?q=${searchValue}&type=playlist`
  );
  return {
    playlists: data?.playlists?.items,
    isLoading,
    isError: error,
  };
};

export default useSearchPlaylists;
