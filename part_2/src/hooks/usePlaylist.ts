import useSWRImmutable from "swr/immutable";

const usePlaylist = (apiEndpoint: string) => {
  const { data, isLoading, error } = useSWRImmutable(apiEndpoint);
  return {
    playlist: data,
    isLoading,
    isError: error,
  };
};

export default usePlaylist;
