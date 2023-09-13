import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFooter from "./MyComponents/MyFooter";
import MyHome from "./MyComponents/MyHome";
import MyNavBar from "./MyComponents/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTvShows from "./MyComponents/MyTvShows";
import MyDetailsShow from "./MyComponents/MyDetailsShow";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/tv-shows" element={<MyTvShows />} />
          <Route path="/tv-shows/:imdbID" element={<MyDetailsShow />} />
          <Route path="/" element={<MyHome />}></Route>
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
