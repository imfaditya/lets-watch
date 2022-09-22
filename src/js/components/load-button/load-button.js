import bootstrap from '../../../scss/bootstrap.scss';
import css from './load-button.css';

class LoadButton extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'});
  }

  set clickEvent(event){
    this._event = event;
    this.render();
  }

  render(){
    const style = document.createElement('style');
    style.textContent = `${bootstrap + css}`;

    this.shadowDOM.appendChild(style);
    this.shadowDOM.innerHTML += `
    <div class="container">
      <div class="d-grid gap-2">
        <button class="btn btn-primary btn-load" type="button">Load More</button>
      </div>
    </div>
    `

    this.shadowDOM.querySelector('.btn-load').addEventListener('click', this._event);
  }
}

customElements.define('load-button', LoadButton);