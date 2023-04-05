import React from "react";
import useSearchPlaylists from "../../hooks/useSearchPlaylists";
import { Link } from "react-router-dom";

export const Playlists = ({ searchInput }: any) => {
  const { playlists } = useSearchPlaylists(searchInput);

  console.log("in playlists", playlists);
  return (
    <div>
      <h1>Playlists</h1>
      <ul>
        {playlists &&
          playlists.map((playlist: any) => {
            return (
              <div key={playlist?.id}>
                <Link
                  to={{ pathname: `/playlist/${playlist.name}` }}
                  state={{ href: playlist.href }}
                >
                  {playlist.name}
                </Link>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
