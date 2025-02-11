// const engine = new Liquid({
//   cache: true
// })

import { getData, fixGroupData } from './data.js';

const baseURL = 'https://fdnd.directus.app/items/person/';

const dataURL = 'https://fdnd.directus.app/items/person/?filter={"id":237}';
const groupURL = 'https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}';
const filterUR = `https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD%20Minor%20Web%20Dev"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}`;
const filterBday = '&sort=-birthdate'



console.log('load main.js')

const response = await fetch(dataURL)
const data = await response.json()


const groupData = await getData(groupURL);

const fixedGroupData = fixGroupData(groupData.data);


const myData = data.data[0]

const $ = (x) => document.querySelector(x)
const $$ = (x) => document.querySelectorAll(x)

console.log(myData)

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
  personal: myData,
  persons: fixedGroupData,
  name: 'Liquid',
  date: new Date()
};

engine.parseAndRender(template.innerHTML, ctx)
  .then(function(html) {
    app.innerHTML = html
  });


