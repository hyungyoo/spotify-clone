import React from "react";
import usePlaylist from "../hooks/usePlaylist";
import { useLocation } from "react-router-dom";

export const Detail = () => {
  const location = useLocation();
  const href = location.state.href;
  const { playlist, isLoading, isError } = usePlaylist(href);

  console.log(playlist);
  return <div>detail</div>;
};
