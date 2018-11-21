(function () {
  'use strict';

  const container = document.getElementById('container');
  const fragment = document.createDocumentFragment();
  const loader = document.getElementById("loader");

  const newsBlock = new News(API_KEY, HOST_URL, SOURCES_PARAM);

  newsBlock.getData('us')
    .then(data => {
      loader.classList.add('hidden');
      const {articles = []} = data;
      articles.forEach(article => {
        if (!article.urlToImage) {
          article.urlToImage =`./src/img/news.jpg`;
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
})();
