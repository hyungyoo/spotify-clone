import useSWRImmutable from "swr/immutable";

const usePlaylist = (url: string | undefined) => {
  const { data, isLoading, error } = useSWRImmutable(url);
  return {
    playlist: data,
    isLoading,
    isError: error,
  };
};

export default usePlaylist;
