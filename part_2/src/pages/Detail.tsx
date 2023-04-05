import React from "react";
import { useParams } from "react-router-dom";
import usePlaylist from "../hooks/usePlaylist";

export const Detail = () => {
  const { id } = useParams();
  const { playlist, isLoading, isError } = usePlaylist(undefined);

  return <div>{id}</div>;
};
