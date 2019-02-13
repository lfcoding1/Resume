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

  //UL COMPUTER SKILLS
  let container = createAndAppend('div', root, {class: 'container'});
  let card = createAndAppend('div', container, {class: 'card'});
  let title = createAndAppend('h1', card, {class: 'skillTitle', text: 'Computer Skills'});
  let ul = createAndAppend('ul', card, {class: 'skillUl'});
  createAndAppend('li', ul, {text: 'HTML', class: 'skillList'});
  createAndAppend('li', ul, {text: 'CSS', class: 'skillList'});
  createAndAppend('li', ul, {text: 'JavaScript',  class: 'skillList'});
  createAndAppend('li', ul, {text: 'Node.js',  class: 'skillList'});
  createAndAppend('li', ul, {text: 'React and other JavaScript frameworks',  class: 'skillList'});
  createAndAppend('li', ul, {text: 'Databases (MySQL, MongoDB)', class: 'skillList'});
  createAndAppend('li', ul, {text: 'GitHub',  class: 'skillList'});
  createAndAppend('li', ul, {text: 'CLI',  class: 'skillList'});
  createAndAppend('br', ul, {text: '', class: 'blank'});
  createAndAppend('br', ul, {text: '', class: 'blank'});
  createAndAppend('br', ul, {text: '', class: 'blank'});
  createAndAppend('br', ul, {text: '', class: 'blank'});
  createAndAppend('br', ul, {text: '', class: 'blank'});

  //UL LANGUAGES
  let langTitle = createAndAppend('h1', card, {class: 'langTitle', text: 'Languages'});
  createAndAppend('li', ul, {text: 'English (mother tongue)', class: 'langList'});
  createAndAppend('li', ul, {text: 'French (intermediate)', class: 'langList'});
  createAndAppend('li', ul, {text: 'Swedish (beginner)', class: 'langList'});


  
 