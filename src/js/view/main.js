import '../components/movie-list/movie-list.js';
import '../components/header/header.js';
import '../components/footer/footer.js';
import '../components/load-button/load-button.js';
import DataMovies from '../data/data-movies.js';


const main = () =>{
  let page = 1;
  const movieList = document.querySelector('movie-list');
  const loadButton = document.querySelector('load-button');
  
  const loadData = async () => {
    try{
      const movies = await DataMovies.getData(page);
      render(movies);
    }catch{
    }
  };
  
  const render = (dataMovies) => {
    movieList.movies = dataMovies;
  };

  const loadButtonClicked = () => {
    page++;
    loadData();
  };

  loadButton.clickEvent = loadButtonClicked;
  loadData();
}

export default main;