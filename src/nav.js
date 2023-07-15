import { renderHome } from './home';
import { renderContact } from './contact';
import { renderMenu } from './menu';

function render() {
  const nav = document.getElementById('nav');

  const navContainer = document.createElement('div');
  navContainer.setAttribute('id', 'nav-container');

  const logoContainer = document.createElement('div');
  logoContainer.setAttribute('id', 'logo-container');

  const logo = document.createElement('img');
  logo.setAttribute('src', 'img/logo.svg');
  logo.setAttribute('id', 'logo');

  const logoText = document.createElement('p');
  logoText.innerText = 'Le Macaron Magnifique';

  logoContainer.appendChild(logo);
  logoContainer.appendChild(logoText);

  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('id', 'button-container');

  const buttons = ['Home', 'Menu', 'Contact'];

  buttons.forEach(function (button) {
    const b = document.createElement('button');
    b.setAttribute('class', 'nav-button');
    b.innerText = button;
    buttonContainer.appendChild(b);
    b.addEventListener('click', linkNavBar);
  })

  navContainer.appendChild(logoContainer);
  navContainer.appendChild(buttonContainer);

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