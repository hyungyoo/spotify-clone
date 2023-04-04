import { Route, Routes } from "react-router-dom";
import "./styles/reset.scss";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;

// const accessToken = useAccessToken();
// const [search, setSearch] = useState("");

// const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//   setSearch(e?.target.value);
// }, []);

// // console.log(search);
// console.log(accessToken);

// const onClick = useCallback(
//   (e: React.MouseEvent<HTMLButtonElement>) => {
//     axios
//       .get("https://api.spotify.com/v1/browse/featured-playlists", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       })
//       .then((res) => console.log(res.data));
//   },
//   [search, accessToken]
// );

// return (
//   <div>
//     <p>hello </p>
//     <input onChange={onChange} />
//     <button onClick={onClick} />
//   </div>
// );
