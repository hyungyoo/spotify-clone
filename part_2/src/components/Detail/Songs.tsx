import React from "react";
import usePlaylist from "../../hooks/usePlaylist";
import { HamburgerButton } from "./HamburgerButton";
import "../../styles/datail/songs.scss";
import { ItemType } from "../../interfaces/playlist";

export const Songs = ({ apiEndpoint }: { apiEndpoint: string }) => {
  const { playlist, isLoading, isError } = usePlaylist(apiEndpoint);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <ul className="songs">
      {playlist &&
        playlist.tracks?.items.map((item: ItemType) => {
          return (
            <li className="song" key={item.track.external_ids.isrc}>
              <div className="song__text">
                <div className="song__text__song-name">
                  {item.track?.album?.name}
                </div>
                <div className="song__text__artist">{item.track?.name}</div>
              </div>
              <HamburgerButton />
            </li>
          );
        })}
    </ul>
  );
};
