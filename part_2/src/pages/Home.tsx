import { useState } from "react";
import useSearchPlaylists from "../hooks/useSearchPlaylists";
import { SearchBox } from "../components/Home/SearchBox";
import { Playlists } from "../components/Home/Playlists";
import { Header } from "../components/Home/Header";
import "../styles/home/home.scss";
import { HomeBackground } from "../components/Home/Background";

export const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const { isError, isLoading } = useSearchPlaylists(searchInput);

  if (isError) return <HomeBackground>is Error</HomeBackground>;
  if (isLoading) return <HomeBackground>is Loading...</HomeBackground>;
  return (
    <HomeBackground>
      <Header />
      <SearchBox setSearchInput={setSearchInput} />
      <Playlists searchInput={searchInput} />
    </HomeBackground>
  );
};
