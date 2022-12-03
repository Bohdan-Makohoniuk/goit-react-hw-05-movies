import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '3a48e749c4f2715bcdedf4e4901d61a1';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${KEY}`);
  return data.results;
};
