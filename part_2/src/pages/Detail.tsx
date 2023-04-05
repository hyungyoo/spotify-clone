import React from "react";
import usePlaylist from "../hooks/usePlaylist";

export const Detail = ({ href }: { href: string }) => {
  const { playlist, isLoading, isError } = usePlaylist(href);

  console.log("in detail", playlist);
  return <div>detail</div>;
};
