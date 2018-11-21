"use strict";

(function () {
  'use strict';

  var container = document.getElementById('container');
  var fragment = document.createDocumentFragment();
  var loader = document.getElementById("loader");
  var newsBlock = new News(API_KEY, HOST_URL, SOURCES_PARAM);
  newsBlock.getData('us').then(function (data) {
    loader.classList.add('hidden');
    var _data$articles = data.articles,
        articles = _data$articles === void 0 ? [] : _data$articles;
    articles.forEach(function (article) {
      if (!article.urlToImage) {
        article.urlToImage = "./src/img/news.jpg";
      }

      var dataItemEl = document.createElement('article');
      dataItemEl.className = 'item';
      dataItemEl.innerHTML = "\n        <div class=\"item-source\">".concat(article.source.name, "</div> \n        <div class=\"item-date\">").concat(new Date(article.publishedAt).toLocaleString(), "</div> \n        <header>\n          <h1><a class=\"item-title\" target=\"_blank\" href=\"").concat(article.url, "\">").concat(article.title, "</a></h1>\n        </header>        \n        <p>").concat(article.description ? article.description : 'Unfortunately, description of news.js not provided.', "</p>\n        <img src=\"").concat(article.urlToImage, "\" alt=\"").concat(article.title, "\">\n      ");
      fragment.appendChild(dataItemEl);
    });
    container.appendChild(fragment);
  }).catch(function (error) {
    return console.log(error);
  });
})();