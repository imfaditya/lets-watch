import bootstrap from '../../../scss/bootstrap.scss';
import css from './movie-list.css';
import imgStar from '../../../assets/star.png';

class MovieList extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'});
  }

  set movies(movies){
    this._movies = movies;
    this.render();
  }

  render(){    
    const wrapper = document.createElement('div');
    const style = document.createElement('style');
    style.textContent = `${bootstrap + css}`;
    wrapper.setAttribute('class', 'row container mx-auto mb-4');

    this._movies.forEach(movie => {
      const item = `
        <div class="list col-lg-2 col-md-4 col-6 mt-4">
          <div class="card h-100">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="movie-item">
            <div class="card-body d-flex flex-column justify-content-between">
              <h6 class="card-title">${movie.title}</h5>
              <div class="rating-wrapper d-flex align-items-center">
                <img src="${imgStar}" alt="star-rating">
                <p class="card-text">${movie.vote_average}</p>
              </div>
            </div>
          </div>
        </div>  
      `;
      wrapper.innerHTML += item;
    });

    this.shadowDOM.appendChild(style);
    this.shadowDOM.appendChild(wrapper);
    
  }
}

customElements.define('movie-list', MovieList);