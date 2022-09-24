import logoWhite from '../../../assets/logo-white.svg';
import bootstrap from '../../../scss/bootstrap.scss';
import css from './header.css';

class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `${bootstrap + css}`;
    const content = document.createElement('header');

    content.innerHTML = `
    <nav class="navbar bg-light">
      <div class="container mx-auto">
        <span class="navbar-brand mb-0"><img src="${logoWhite}" alt=""></span>
      </div>
    </nav>

    <div class="jumbotron p-5 mb-4">
      <div class="container py-5">
        <h1 class="display-6 fw-bold">Daily Popular Movies</h1>
        <p class="col-md-8 fs-4">Find Your Movie References To Watch Only Here</p>
      </div>
    </div>
  `;

    this.shadowDOM.appendChild(style);
    this.shadowDOM.appendChild(content);
  }
}

customElements.define('header-bar', HeaderBar);
