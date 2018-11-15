'use strict';

const API_KEY = 'e9979803c3894fa182b399c482279297';
const HOST_URL = 'https://newsapi.org/v2/';
const SOURCES_PARAM = 'top-headlines';
const container = document.getElementById('container');
const fragment = document.createDocumentFragment();
const getRandomIntNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomImageUrl = () => `./src/img/news-${getRandomIntNumber(1, 3)}.jpg`;
const loader = document.getElementById("loader");

window.onload = () => loader.style.display = "none";

class News {
  constructor(API_KEY, HOST_URL, SOURCES_PARAM) {
    this.API_KEY = API_KEY;
    this.HOST_URL = HOST_URL;
    this.SOURCES_PARAM = SOURCES_PARAM;
  }
  getUrl(country) {
    return `${HOST_URL}${SOURCES_PARAM}?country=${country}&apiKey=${API_KEY}`
  }
  getData(country) {
    const url = this.getUrl(country);
    return fetch(url)
      .then(response => response.json());
  }
}

const newsBlock = new News(API_KEY, HOST_URL, SOURCES_PARAM);

newsBlock.getData('us')
  .then(data => {
    const articlesList = data.articles;
    articlesList.forEach(article => {
      if (!article.urlToImage) {
        article.urlToImage = getRandomImageUrl();
      }
      let dataItemEl = document.createElement('article');
      dataItemEl.className = 'item';
      dataItemEl.innerHTML = `
        <div class="item-source">${article.source.name}</div> 
        <div class="item-date">${new Date(article.publishedAt).toLocaleString()}</div> 
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
