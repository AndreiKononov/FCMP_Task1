export const articleTemplate = article => {
  return (
    ` <div class="item-source">${article.source.name}</div>
      <div class="item-date">${new Date(article.publishedAt).toLocaleString()}</div>
      <header>
        <h1><a class="item-title" target="_blank" href="${article.url}">${article.title}</a></h1>
      </header>
      <p>${article.description ? article.description : 'Unfortunately, description of news not provided.'}</p>
      <img ${article.urlToImage ? `src=${article.urlToImage}` : `src="./src/img/news.jpg"`} alt="${article.title}">`
  );
};
