import axios from 'axios';

class DataMovies {
  static getData = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=8dc5d6d14e96fc3e3117664ecaadcee7&language=en-US&page=${page}`;
    try {
      const dataMovies = await axios.get(url);
      return Promise.resolve(dataMovies.data.results);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export default DataMovies;