import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Navigation } from './Navigation/Navigation';
import {Cast} from './Cast/Cast'
import {Reviews} from './Reviews/Reviews'
export const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieID" element={<MovieDetails />}>
          <Route path ='movies/:movieID/cast' element ={<Cast/>} />
          <Route path ='movies/:movieID/reviews' element ={<Reviews/>} />
        </Route>
      </Routes>
    </div>
  );
};
