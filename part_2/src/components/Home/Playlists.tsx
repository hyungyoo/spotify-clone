import { useCallback } from "react";
import useSearchPlaylists from "../../hooks/useSearchPlaylists";
import { PlaylistType } from "../../interfaces/playlist";
import "../../styles/home/playlists.scss";
import { Playlist } from "./Playlist";

type Props = {
  searchInput: string;
};

export const Playlists = ({ searchInput }: Props) => {
  const { playlists, total, size, setSize } = useSearchPlaylists(searchInput);

  const onScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      if (isAtBottom) {
        setSize(size + 1);
      }
    },
    [size, setSize]
  );

  return (
    <div className="playlists">
      <div className="playlists__text">
        {playlists
          ? `${total} Résultats trouvés`
          : `Veuillez faire une recherche`}
      </div>
      <div className="playlists__list" onScroll={onScroll}>
        <ul>
          {playlists &&
            playlists.map((playlist: PlaylistType, index: number) => {
              const key = playlist.id ? playlist.id : index;
              return (
                <li key={index}>
                  <Playlist playlist={playlist} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
