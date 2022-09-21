import '../components/movie-list/movie-list.js';
import '../components/header/header.js';
import '../components/footer/footer.js';
import DataMovies from '../data/data-movies.js';


const main = () =>{
  let page = 1;
  const movieList = document.querySelector('movie-list');
  
  const loadData = async () => {
    try{
      const movies = await DataMovies.getData(page);
      render(movies);
      console.log(movies);
    }catch{

    }
  }
  
  const render = (dataMovies) => {
    movieList.movies = dataMovies;
  }

  loadData();
}

export default main;