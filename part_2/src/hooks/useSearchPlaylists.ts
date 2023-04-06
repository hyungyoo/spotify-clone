import useSWRInfinite from "swr/infinite";

const PAGE_SIZE = 20;

/**
 * Cette fonction génère une clé unique
 * pour chaque page afin d'implémenter une pagination infinie
 * avec SWR. À l'intérieur de la fonction,
 * l'URL de la requête API est générée
 * en fonction du terme de recherche et du numéro de page,
 * et null est retourné
 * si les données de la page précédente sont inexistantes
 * ou si la page suivante n'existe pas.
 * @param pageIndex
 * @param previousPageData
 * @param searchValue
 * @returns null | apiEndpoint
 */
const getKey = (
  pageIndex: number,
  previousPageData: any,
  searchValue: string
) => {
  if (
    (previousPageData && !previousPageData.playlists.next) ||
    searchValue === ""
  )
    return null;

  const offset = pageIndex * PAGE_SIZE;
  return `https://api.spotify.com/v1/search?q=${searchValue}&type=playlist&offset=${offset}&limit=${PAGE_SIZE}`;
};

/**
 * La fonction useSearchPlaylists utilise le hook useSWRInfinite pour implémenter le défilement infini de pagination.
 * @param searchValue
 * @returns playlist, isLoading, error, size, setSize
 */
const useSearchPlaylists = (searchValue: string) => {
  const { data, isLoading, error, setSize, size } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, searchValue)
  );

  const playlists = data ? data.flatMap((page) => page.playlists.items) : [];
  const total = data ? data[0].playlists.total : 0;
  return { playlists, total, isLoading, isError: error, setSize, size };
};

export default useSearchPlaylists;
