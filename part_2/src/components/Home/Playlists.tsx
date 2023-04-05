import React from "react";
import useSearchPlaylists from "../../hooks/useSearchPlaylists";
import { Link } from "react-router-dom";
import { PlaylistType } from "../../interfaces/playlist";

export const Playlists = ({ searchInput }: any) => {
  const { playlists, isError, isLoading } = useSearchPlaylists(searchInput);

  return (
    <div>
      <ul>
        {playlists &&
          playlists.map((playlist: PlaylistType) => {
            return (
              <li key={playlist.id}>
                <Link
                  to={{
                    pathname: `/playlist/${encodeURIComponent(playlist?.name)}`,
                  }}
                  state={{ apiEndpoint: playlist?.href }}
                >
                  {playlist.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
