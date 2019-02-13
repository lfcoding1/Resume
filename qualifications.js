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
  

  // STUDIES
  let container = createAndAppend('div', root, {class: 'container'})
  let studyCard = createAndAppend('div', container, {class: 'studyCard'});
  let studyTitle = createAndAppend('h1', studyCard, {class: 'studyTitle', text: 'Recent Studies'});
  
  let HYF = createAndAppend('h2', studyCard, {class: 'studySubtitle', text: 'Hack Your Future, Malmö, Sweden'});
  createAndAppend('p', HYF, {class: 'studyP', text: 'Intensive course in Full Stack Web Development'});
 
  let french = createAndAppend('h2', studyCard, {class: 'studySubtitle', text: "Alliance Francaise, Paris, France"});
  createAndAppend('p', french, {class: 'studyP', text: 'French language levels A1, A2'});
 
  let french2 = createAndAppend('h2', studyCard, {class: 'studySubtitle', text: "Cours Municipaux d'Adultes, Paris, France"});
  createAndAppend('p', french2, {class: 'studyP', text: 'French language level B1'});

  let swedish = createAndAppend('h2', studyCard, {class: 'studySubtitle', text: 'Komvux, Lund, Sweden'})
  createAndAppend('p', swedish, {class: 'studyP', text: 'Current student of Svenska För Invandrare'});

  //ONLINE STUDIES
  let onlineCard = createAndAppend('div', container, {class: 'onlineCard'});
  let onlineTitle = createAndAppend('h1', onlineCard, {class: 'onlineTitle', text: 'Online Studies'});
  let solo = createAndAppend('h2', onlineCard, {class: 'onlineSubtitle', text:'SoloLearn:'});
  createAndAppend('p', solo, {class: 'onlineP', text: '-HTML Fundamentals', href: 'https://www.sololearn.com/Certificate/1014-11160983/pdf/'});
  createAndAppend('p', solo, {class: 'onlineP', text: '-SQL Fundamentals', href: 'https://www.sololearn.com/Certificate/1060-11160983/pdf/'})
  createAndAppend('p', solo, {class: 'onlineP', text: '-JavaScript Tutorial', href: 'https://www.sololearn.com/Certificate/1024-11160983/pdf/'});
  let freecode = createAndAppend('h2', onlineCard, {class: 'onlineSubtitle', text: 'FreeCodeCamp:'});
  createAndAppend('p', freecode, {class: 'onlineP', text: 'approximately 250 hours of online studies'});
  createAndAppend('a', freecode, {class: 'onlineP', href: 'https://www.freecodecamp.org/lfcoding'});
