import useSearchPlaylists from "../../hooks/useSearchPlaylists";
import { PlaylistType } from "../../interfaces/playlist";
import "../../styles/home/playlist.scss";
import { Playlist } from "./Playlist";

type Props = {
  searchInput: string;
};

export const Playlists = ({ searchInput }: Props) => {
  const { playlists, total } = useSearchPlaylists(searchInput);

  return (
    <div className="playlist">
      <div className="playlist__text">
        {playlists ? `${total} Résultats trouvés` : `아직 검색안함`}
      </div>
      <div className="playlist__list ">
        <ul>
          {playlists &&
            playlists.map((playlist: PlaylistType) => {
              return (
                <li key={playlist.id}>
                  <Playlist playlist={playlist} />
                </li>
              );
            })}
        </ul>
      </div>
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
