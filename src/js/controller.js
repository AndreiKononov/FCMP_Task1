import { fragment, container, loader} from "./constants";
import { articleTemplate } from "./template";

export const  CONTROLLER = (function () {
  const showArticle = function (data) {
    loader.classList.add('hidden');
    const {articles = []} = data;
    articles.forEach(article => {
      let dataItemEl = document.createElement('article');
      dataItemEl.className = 'item';
      dataItemEl.innerHTML = articleTemplate(article);
      fragment.appendChild(dataItemEl);
    });
    container.appendChild(fragment);
  };
  return {
    showArticle: showArticle
  }
})();
