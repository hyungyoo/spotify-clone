import React, { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";

type Props = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

// const useInput = <T = any>(initialData: T): ReturnTypes<T> => {
//     const [value, setValue] = useState(initialData);
//     const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//       setValue(e.target.value as unknown as T);
//     }, []);
//     return [value, handler, setValue];
//   };

export const SearchBox = ({ setSearchInput }: Props) => {
  const [value, handler, setValue] = useInput("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSearchInput(value);
      setValue("");
    },
    [value]
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
