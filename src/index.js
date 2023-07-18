import { renderHome } from './home';
import { renderContact } from './contact';
import { renderMenu } from './menu';
import { renderNav } from './nav';
import { renderFooter } from './footer';

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

function footer() {
  renderFooter();
}

nav();
home();
footer();