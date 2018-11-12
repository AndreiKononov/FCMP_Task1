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
    console.log(response);
    for(let i = 0; i < response.articles.length; i++ ){
      let worldEvent = document.createElement('a');
      worldEvent.className = 'world-news';
      worldEvent.href = response.articles[i].url;
      worldEvent.target = '_blank';
      worldEvent.innerHTML = `
        <span>${response.articles[i].source.name} / ${response.articles[i].publishedAt}</span> 
        <h1 class="news-title">${response.articles[i].title}</h1>
        <p>${response.articles[i].description}</p>
        <img src="${response.articles[i].urlToImage}" alt="${response.articles[i].title}">
      `;
      container.appendChild(worldEvent);
    }
  })
  .catch(error => console.log(error));
