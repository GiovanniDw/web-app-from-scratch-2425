import { getData, fixGroupData } from './data.js';

const $ = (x) => document.querySelector(x)
const $$ = (x) => document.querySelectorAll(x)

const baseURL = 'https://fdnd.directus.app/items/person/';
const filterMe = '?filter={"id":237}'
const filterGroup = '?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}'
const dataURL = 'https://fdnd.directus.app/items/person/?filter={"id":237}';
const groupURL = 'https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}';
const filterUR = `https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}`;
const filterBday = '&sort=-birthdate'

// const response = await fetch(dataURL)
// const data = await response.json()

const groupData = await getData(baseURL+filterGroup);

const fixedGroupData = fixGroupData(groupData.data);

const myData = await getData(baseURL+filterMe);


console.log('myData')
console.log(myData.data[0])

// $('#app').innerHTML = `
//   <div>
//     <img src='${myData.avatar}' alt='${myData.name}'s Avatar'>
//     <h1>${myData.name}</h1>
//     <p>${myData.bio}</p>
//   </div>
// `

const template = $('template')
const app = $('#app')
const engine = new liquidjs.Liquid()


// let Liquid = window.liquidjs.Liquid
// let engine = new Liquid({
//   extname: '.html',
//   cache: true
// });

let src = "<h2>Welcome to {{ myData.name }}</h2>";

let ctx = {
  personal: myData.data[0],
  persons: fixedGroupData,
  name: 'Liquid',
  date: new Date()
};




engine.parseAndRender(template.innerHTML, ctx)
  .then(function(html) {
    app.innerHTML = html
  });


  // window.addEventListener('load', () => {
  //   setTimeout(() => {
  //     if (document.getElementById('flip-card')) {
  //       document.getElementById('flip-card').classList.add('is-flipped');

  //     }

      
  //   }, 2000); // Flip na 2 seconden
  // });