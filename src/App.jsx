import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PopularPage from "./pages/PopularPage";
import TrendingPage from "./pages/TrendingPage";
import TopRatedPage from "./pages/TopRatedPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/movie/:movieId' element={<MoviePage />} />
        <Route path='/popular' element={<PopularPage />} />
        <Route path='/trending' element={<TrendingPage />} />
        <Route path='/top_rated' element={<TopRatedPage />} />
        <Route path='/searchpage' element={<SearchPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
