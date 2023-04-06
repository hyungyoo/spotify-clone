import React, { useCallback } from "react";
import { PlaylistType } from "../../interfaces/playlist";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>{playlist.name}</div>
      <button onClick={onClick}>voir</button>
    </div>
  );
};
