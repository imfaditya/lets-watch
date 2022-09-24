import '../components/movie-list/movie-list';
import '../components/header/header';
import '../components/footer/footer';
import '../components/load-button/load-button';
import DataMovies from '../data/data-movies';

const main = () => {
  let page = 1;
  const maxPage = 500;
  const movieList = document.querySelector('movie-list');
  const loadButton = document.querySelector('load-button');

  const render = (dataMovies) => {
    movieList.movies = dataMovies;
  };

  const renderError = (message) => {
    movieList.renderError(message);
    loadButton.remove();
  };

  const loadData = async () => {
    try {
      movieList.setAttribute('loading', 'true');
      const movies = await DataMovies.getData(page);
      movieList.setAttribute('loading', 'false');
      render(movies);
    } catch (error) {
      movieList.setAttribute('loading', 'false');
      renderError(error);
    }
  };

  const loadButtonClicked = () => {
    if (page < maxPage) {
      page += 1;
      loadData();
    }

    if (page === maxPage) {
      loadButton.remove();
    }
  };

  loadButton.clickEvent = loadButtonClicked;
  loadData();
};

export default main;
