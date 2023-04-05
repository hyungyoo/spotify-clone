import { useState } from "react";
import useSearchPlaylists from "../hooks/useSearchPlaylists";
import { SearchBox } from "../components/Home/SearchBox";
import { Playlists } from "../components/Home/Playlists";

export const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const { playlists, isError, isLoading } = useSearchPlaylists(searchInput);

  if (isError) return <div>is Error</div>;
  if (isLoading) return <div>is Loading...</div>;
  return (
    <div>
      <SearchBox setSearchInput={setSearchInput} />
      <Playlists searchInput={searchInput} />
    </div>
  );
};
