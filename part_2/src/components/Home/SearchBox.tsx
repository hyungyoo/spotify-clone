import React, { useCallback, useEffect, useRef } from "react";
import useInput from "../../hooks/useInput";
import "../../styles/home/searchBox.scss";

type Props = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBox = ({ setSearchInput }: Props) => {
  const [value, handler, setValue] = useInput("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSearchInput(value);
      setValue("");
    },
    [value, setSearchInput, setValue]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="searchBox">
      <label htmlFor="searchBox__submit-input" className="searchBox__label">
        Rechercher une playlist dans Spotify
      </label>
      <form onSubmit={handleSubmit} className="searchBox__submit">
        <input
          className="searchBox__submit-input"
          id="searchBox__submit-input"
          type="text"
          placeholder="검색할 플레이리스트"
          value={value}
          onChange={handler}
          ref={inputRef}
        />
        <button type="submit" className="searchBox__submit-button">
          Rechercher
        </button>
      </form>
    </div>
  );
};
