/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
import bootstrap from '../../../scss/bootstrap.scss';
import css from './movie-list.css';
import imgStar from '../../../assets/star.png';

class MovieList extends HTMLElement {
  constructor() {
    super();
    this._movies = [];
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movies(movies) {
    for (const movie of movies) {
      this._movies.push(movie);
    }
    this.render();
  }

  render() {
    const wrapper = document.createElement('div');
    const style = document.createElement('style');
    style.textContent = `${bootstrap + css}`;
    wrapper.setAttribute('class', 'row container mx-auto mb-4');

    this._movies.forEach((movie) => {
      const item = `
        <div class="list col-lg-3 col-md-3 col-6 mt-4">
          <div class="card h-100">
            <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="card-img-top" alt="movie-item">
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
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.appendChild(style);
    this.shadowDOM.appendChild(wrapper);
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap + css}
      </style>

      <div class="container error-message">
        <h2>Sorry :( This Website Under Maintenance</h2>
        <p>${message}</p>
      </div>
    `;
  }

  renderLoading() {
    this.shadowDOM.innerHTML += `
      <style>
        ${bootstrap + css}
      </style>

      <div class="container loading mt-5 mb-5">
        <span class="loading-circle mx-auto"></span>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['loading'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue === 'true') {
      this.renderLoading();
    }
  }
}

customElements.define('movie-list', MovieList);
