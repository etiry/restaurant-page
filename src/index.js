import { renderHome } from './home';
import { renderContact } from './contact';
import { renderMenu } from './menu';
import { renderNav } from './nav';

function home() {
  renderHome();
}

function contact() {
  renderContact();
}

function menu() {
  renderMenu();
}

function nav() {
  renderNav();
}

// contact();
// menu();
nav();
home();