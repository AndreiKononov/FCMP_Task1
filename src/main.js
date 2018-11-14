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
    response.articles.forEach((article) => {
      let dataItemEl = document.createElement('article');
      dataItemEl.className = 'item';
      dataItemEl.innerHTML = `
        <span>${article.source.name} / ${article.publishedAt}</span> 
        <header>
          <h1><a class="item-title" target="_blank" href="${article.url}">${article.title}</a></h1>
        </header>        
        <p>${article.description}</p>
        <img src="${article.urlToImage}" alt="${article.title}">
      `;
      container.appendChild(dataItemEl);
    })
  })
  .catch(error => console.log(error));
