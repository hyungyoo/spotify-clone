import React, { useCallback, useState } from "react";
import "./App.css";
import useAccessToken from "./hooks/useAccessToken";
import axios from "axios";

function App() {
  const accessToken = useAccessToken();
  const [search, setSearch] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e?.target.value);
  }, []);

  // console.log(search);
  console.log(accessToken);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      axios
        .get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => console.log(res.data));
    },
    [search, accessToken]
  );

  return (
    <div>
      <p>hello </p>
      <input onChange={onChange} />
      <button onClick={onClick} />
    </div>
  );
}

export default App;
