'use strict';

const API_KEY = 'e9979803c3894fa182b399c482279297';
const HOST_URL = 'https://newsapi.org/v2/';
const SOURCES_PARAM = 'top-headlines';
const url = `${HOST_URL}${SOURCES_PARAM}?country=us&apiKey=${API_KEY}`;
const req = new Request(url);
const container = document.getElementById('container');

fetch(req)
  .then(response => response.json())
  .then(response => {
    for(let i = 0; i < response.articles.length; i++ ){
      let dataItemEl = document.createElement('article');
      dataItemEl.className = 'item';
      dataItemEl.innerHTML = `
        <span>${response.articles[i].source.name} / ${response.articles[i].publishedAt}</span> 
        <header>
          <h1><a class="item-title" target="_blank" href="${response.articles[i].url}">${response.articles[i].title}</a></h1>
        </header>        
        <p>${response.articles[i].description}</p>
        <img src="${response.articles[i].urlToImage}" alt="${response.articles[i].title}">
      `;
      container.appendChild(dataItemEl);
    }
  })
  .catch(error => console.log(error));
