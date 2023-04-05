import React from "react";
import usePlaylist from "../hooks/usePlaylist";
import { useLocation } from "react-router-dom";

import { Background } from "../components/Detail/Background";
import { PlaylistInfo } from "../components/Detail/PlaylistInfo";
import { Songs } from "../components/Detail/Songs";

export const Detail = () => {
  const location = useLocation();
  const apiEndpoint = location.state?.apiEndpoint;
  const { playlist, isLoading, isError } = usePlaylist(apiEndpoint);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <Background>
      <PlaylistInfo apiEndpoint={apiEndpoint} />
      <Songs apiEndpoint={apiEndpoint} />
    </Background>
  );
};
