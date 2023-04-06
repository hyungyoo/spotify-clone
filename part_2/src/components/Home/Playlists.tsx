import useSearchPlaylists from "../../hooks/useSearchPlaylists";
import { PlaylistType } from "../../interfaces/playlist";
import "../../styles/home/playlist.scss";

export const Playlists = ({ searchInput }: any) => {
  const { playlists } = useSearchPlaylists(searchInput);

  return (
    <div className="playlist">
      <ul>
        {playlists &&
          playlists.map((playlist: PlaylistType) => {
            return (
              <li key={playlist.id}>
                <div>{playlist.name}</div>
                <button>voir</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

// <Link
// to={{
//   pathname: `/playlist/${encodeURIComponent(playlist?.name)}`,
// }}
// state={{ apiEndpoint: playlist?.href }}
// >
// {playlist.name}
// </Link>
