import React from "react";
import useSearchPlaylists from "../hooks/useSearchPlaylists";
import { Detail } from "./Detail";

export const Home = () => {
  const { playlists, isError, isLoading } = useSearchPlaylists("Taylor");

  console.log(playlists);
  return (
    <div>
      <Detail />
    </div>
  );
};
