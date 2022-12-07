import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '621fcee78f56c436770adc2b5b61fa26';


// trending movies
export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return data.results;
};


// movie details
export const getMovieById = async (movieID) => {
    const res = await axios
        .get(`/movie/${movieID}?api_key=${KEY}`)
        .catch(error => {
            throw new Error('Oops... seems like an error occured.');
        });
    return res.data;
}

export const getMoviesdByQuery = async query => {
    const res = await axios.get(`search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
    return res.data.results;
}