import css from './footer.css';

class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `${css}`;
    const content = document.createElement('footer');

    content.innerHTML = `
      <footer>
        <p>Made with ❤️ for Dicoding Submissions.</p>
        <p>Powered by The Movie Database API</p>
      </footer>
    `;

    this.shadowDOM.appendChild(style);
    this.shadowDOM.appendChild(content);
  }
}

customElements.define('footer-bar', FooterBar);
