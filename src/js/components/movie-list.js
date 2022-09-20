import css from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
    wrapper.setAttribute('class', 'row container mx-auto mb-4');
    style.textContent = `${css}`;

    this._movies.forEach(movie => {
      const item = `
        <div class="col-lg-2 col-md-4 col-6 mt-4">
          <div class="card h-100">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="movie-item">
            <div class="card-body">
              <h5 class="card-title">${movie.original_title}</h5>
              <p class="card-text">${movie.vote_average}</p>
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