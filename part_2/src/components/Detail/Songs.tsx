import { HamburgerButton } from "./HamburgerButton";
import "../../styles/datail/songs.scss";
import { ItemType } from "../../interfaces/playlist";
import useSWRImmutable from "swr/immutable";

export const Songs = ({ apiEndpoint }: { apiEndpoint: string }) => {
  const { data: playlist } = useSWRImmutable(apiEndpoint);

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
