import React, { useCallback } from "react";
import { PlaylistType } from "../../interfaces/playlist";
import { useNavigate } from "react-router-dom";
import "../../styles/home/playlist.scss";

type Props = {
  playlist: PlaylistType;
};

export const Playlist = ({ playlist }: Props) => {
  const navigate = useNavigate();

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate("/playlist/aa", { state: { apiEndpoint: playlist?.href } });
    },
    [playlist?.href, navigate]
  );

  return (
    <div className="playlist">
      <div className="playlist__text">{playlist.name}</div>
      <button className="playlist__button" onClick={onClick}>voir</button>
    </div>
  );
};
