import { setupEventListener } from '../modules/GetJokes.js';
import { postJoke } from '../modules/PostJoke.js';

function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const homeLink = document.createElement('a');
  homeLink.href = './index.html'
  homeLink.textContent = 'Home';
  homeLink.style.marginRight = '10px'

  const postJokesLink = document.createElement('a');
  postJokesLink.href = './postJokes.html';
  postJokesLink.textContent = 'send jokes';
  postJokesLink.style.marginRight = '10px'

  navbar.appendChild(homeLink);
  navbar.appendChild(postJokesLink);

  const header = document.getElementById('header');
  header.insertBefore(navbar, header.firstChild);
}
//console.log(getJokes());
createNavbar();
postJoke();
setupEventListener();