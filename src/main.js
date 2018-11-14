'use strict';

const API_KEY = 'e9979803c3894fa182b399c482279297';
const HOST_URL = 'https://newsapi.org/v2/';
const SOURCES_PARAM = 'top-headlines';
const url = `${HOST_URL}${SOURCES_PARAM}?country=us&apiKey=${API_KEY}`;
const req = new Request(url);
const container = document.getElementById('container');
const fragment = document.createDocumentFragment();
const getRandomIntNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomImageUrl = () => `./src/img/news-${getRandomIntNumber(1, 3)}.jpg`;
const loader = document.getElementById("loader");

window.onload = () => loader.style.display = "none";

fetch(req)
  .then(response => response.json())
  .then(response => {
    response.articles.forEach((article) => {
      if (!article.urlToImage) {
        article.urlToImage = getRandomImageUrl();
      }
      let dataItemEl = document.createElement('article');
      dataItemEl.className = 'item';
      dataItemEl.innerHTML = `
        <span>${article.source.name} / ${article.publishedAt}</span> 
        <header>
          <h1><a class="item-title" target="_blank" href="${article.url}">${article.title}</a></h1>
        </header>        
        <p>${article.description ? article.description : 'Unfortunately, description of news not provided.'}</p>
        <img src="${article.urlToImage}" alt="${article.title}">
      `;
      fragment.appendChild(dataItemEl);
    });
    container.appendChild(fragment);
  })
  .catch(error => console.log(error));
