import { LoggerDecorator, articleFactory } from "./utils";

const fragment = document.createDocumentFragment();

const getHTML = (data) => {
  if (!data) {
    return;
  }
  const {articles = []} = data;
  articles.map(item => {
    if (!item.urlToImage) {
      item.urlToImage = `./src/img/news.jpg`;
    }
    let articleFactoryWithLogger = new LoggerDecorator(articleFactory);
    const dataItemElement = articleFactoryWithLogger.create({ class: 'item' });
    dataItemElement.innerHTML = `
      <div class="item-source">${item.source.name}</div>
      <div class="item-date">${new Date(item.publishedAt).toLocaleString()}</div>
      <header>
        <h1><a class="item-title" target="_blank" href="${item.url}">${item.title}</a></h1>
      </header>
      <p>${item.description ? item.description : 'Unfortunately, description of news not provided.'}</p>
      <img src="${item.urlToImage}" alt="${item.title}">
    `;
    fragment.appendChild(dataItemElement);
  });
  return fragment;
};

export const CONTROLLER = (() => ({
  getHTML
}))();
