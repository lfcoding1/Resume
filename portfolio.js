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