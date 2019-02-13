'use strict'

function createAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.keys(options).forEach((key) => {
    const value = options[key];
    if (key === 'text') {
      elem.innerText = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

  const root = document.getElementById('root');

     
  //NAVIGATION BAR
  let navBar = createAndAppend('div', root, {class: 'navBar'});
  let home = createAndAppend('a', navBar, {text: 'HOME', href: 'index.html', class: 'navBarOption'});
  let about = createAndAppend('a', navBar, {text: 'ABOUT', href: 'about.html', class: 'navBarOption'});
  let skills = createAndAppend('a', navBar, {text: 'SKILLS', class: 'navBarOption', href: 'skills.html'});
  let qualifications = createAndAppend('a', navBar, {class: 'navBarOption', href: 'qualifications.html', text: 'STUDIES'})
  let portfolio = createAndAppend('a', navBar, {text: 'PORTFOLIO', href: 'portfolio.html', class: 'navBarOption'});

  //TITLE AND ICONS
  let container = createAndAppend('div', root, {class: 'container'});
  let name = createAndAppend('h1', container, {text: 'Louise Francois', class: 'myName'});
  let introduction = createAndAppend('p', name, {text: 'Full Stack Web Developer', class: 'intro'});
  let icons = createAndAppend('div', root, {class: 'icons'});

  let githubIcon = createAndAppend('a', icons, {class: 'fab fa-github fa-3x fa-fw', id: 'gitLink'});
  document.getElementById("gitLink").href = "https://github.com/lfcoding1"; 
  document.getElementById("gitLink").target="_blank";

  let linkedInIcon = createAndAppend('a', icons, {class: 'fab fa-linkedin fa-3x fa-fw', id: 'linkedInLink'});
  document.getElementById("linkedInLink").href = "http://linkedin.com/in/louise-francois"; 
  document.getElementById("linkedInLink").target="_blank";

 
  let emailIcon = createAndAppend('a', icons, {class: 'fas fa-envelope-square fa-3x fa-fw', id: 'emailLink'});
  document.getElementById("emailLink").href = 'contact.html';



