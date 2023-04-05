import React, { useCallback, useEffect, useRef } from "react";
import useInput from "../../hooks/useInput";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색할 플레이리스트"
        value={value}
        onChange={handler}
        ref={inputRef}
      />
      <button type="submit">Search</button>
    </form>
  );
};
