import React from "react";
import "../../styles/datail/play-info.scss";
import useSWRImmutable from "swr/immutable";

export const PlaylistInfo = ({ apiEndpoint }: { apiEndpoint: string }) => {
  const { data: playlist } = useSWRImmutable(apiEndpoint);

  return (
    <React.Fragment>
      <img
        className="artwork-image"
        src={playlist?.images[0]?.url}
        alt="artwork.png"
      />
      <div className="artwork-text">
        {playlist?.name.length > 20
          ? playlist?.name.slice(0, 20) + "..."
          : playlist?.name}
      </div>
      <button className="follow-button">
        <div className="follow-button__text">FOLLOWING</div>
      </button>
      <div className="artist-name">{`${playlist?.owner?.display_name} • ${playlist?.followers?.total} FOLLOWERS`}</div>
      <button className="play-button">
        <div className="play-button__text">SHUFFLE PLAY</div>
      </button>
      <div className="download">
        <div className="download__text">Download</div>
        <div className="download__button">
          <input type="checkbox" id="download-check" />
          <label
            htmlFor="download-check"
            className="download__button--toggle"
          ></label>
        </div>
      </div>
    </React.Fragment>
  );
};
