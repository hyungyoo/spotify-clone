import "../../styles/datail/songs.scss";

export const HamburgerButton = () => {
  return (
    <div className="song__button">
      <input type="checkbox" id="song-check" />
      <label htmlFor="song-check" className="song__button--hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};
