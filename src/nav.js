import { renderHome } from './home';
import { renderContact } from './contact';
import { renderMenu } from './menu';

function render() {
  const nav = document.getElementById('nav');

  const navContainer = document.createElement('div');
  navContainer.setAttribute('id', 'nav-container');

  const buttons = ['Home', 'Menu', 'Contact'];

  buttons.forEach(function (button) {
    const b = document.createElement('button');
    b.setAttribute('class', 'nav-button');
    b.innerText = button;
    navContainer.appendChild(b);
    b.addEventListener('click', linkNavBar);
  })

  nav.appendChild(navContainer);
}

function linkNavBar(e) {
  if (e.target.innerText == 'Home') {
    renderHome();
  } else if (e.target.innerText == 'Menu') {
    renderMenu();
  } else {
    renderContact();
  }
}

export { render as renderNav };