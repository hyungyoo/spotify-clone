import { Route, Routes } from "react-router-dom";
import "./styles/reset.scss";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { SWRConfig } from "swr";
import fetcher from "./lib/fetcher";

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:playlistName" element={<Detail />} />
      </Routes>
    </SWRConfig>
  );
}

export default App;
