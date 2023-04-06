import useSearchPlaylists from "../../hooks/useSearchPlaylists";
import { PlaylistType } from "../../interfaces/playlist";
import "../../styles/home/playlists.scss";
import { Playlist } from "./Playlist";

type Props = {
  searchInput: string;
};

export const Playlists = ({ searchInput }: Props) => {
  const { playlists, total } = useSearchPlaylists(searchInput);

  return (
    <div className="playlists">
      <div className="playlists__text">
        {playlists
          ? `${total} Résultats trouvés`
          : `Veuillez faire une recherche`}
      </div>
      <div className="playlists__list">
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
