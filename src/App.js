import './App.css';
import axios from 'axios';
// import ".env" from ".env";

//^ Routers:
import {Routes, Route} from "react-router-dom";

//^ React Slick CSS: (For carousels)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//^ Pages:
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";    
axios.defaults.params = {};
// axios.defaults.params["api_key"] = "b4a7ff0b7f1a527f9940279c07620586";
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/plays' element={<PlayPage />} />
    </Routes>
  );
}

export default App;
