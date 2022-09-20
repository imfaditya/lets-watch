import Movies from '../data/movies.js';
import '../components/movie-list.js';

const view = () =>{
  let movieList = document.querySelector('movie-list');

  const result = (async (pages = 1) => {
    const dataMovies = await Movies.getMovies(pages);
    render(dataMovies);
  });

  const render = (dataMovies) => {
    movieList.movies = dataMovies;
  }

  result();
}

export default view;