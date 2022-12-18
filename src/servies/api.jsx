import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '621fcee78f56c436770adc2b5b61fa26';


// trending movies
export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return data.results;
};


// movie details
export const getMovieById = async (movieId) => {
    const res = await axios
        .get(`/movie/${movieId}?api_key=${KEY}`)
        .catch(error => {
            throw new Error('Oops... seems like an error occured.');
        });
    return res.data;
}

// export const getMoviesdByQuery = async query => {
//     const res = await axios.get(`search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
//     return res.data.results;
// }

export const getMoviesdByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};


export const getActors = async moviId => {
  
  const res = await axios.get(`movie/${moviId}/credits?api_key=${KEY}&language=en-US`)
  return res.data.cast;
};




export const getReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data.results;
};

