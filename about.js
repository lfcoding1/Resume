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
  

let container = createAndAppend('div', root, {class: 'container'});
let card = createAndAppend('div', container, {class: 'card'});
let title = createAndAppend('h1', card, {class: 'skillTitle', text: "Hi, I'm Louise"});
let myImage = createAndAppend('img', container, {class: 'image', src: 'images/me.jpg'});
createAndAppend('p', card, {class: 'aboutMe', text:
'I am an Australian living in Sweden.  My journey here came via an intrepid path through the international tourism industry, and with a 6 year stop-over in France.'
+ '  My current passion is taking on the complex and constantly evolving world of computer programming, a subject which is to to me both intriguing and exciting (and yes, even sometimes downright intimidating).'});  
createAndAppend('p', card, {class: 'aboutMe', text: 'My goal is a career as a Full Stack web developer.  I enjoy the challenge of learning new programming languages and I am eager to expand my skill set to keep abreast of all the exciting new developments in this field.'
+ '  My spoken languages include English (mother tongue), French (intermediate) and Swedish (beginner level).'});