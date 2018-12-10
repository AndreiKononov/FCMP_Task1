import { fragment, container, loader} from "./constants";
import { articleTemplate } from "./template";

function showArticle(data) {
  loader.classList.add('hidden');
  const {articles = []} = data;
  articles.forEach(article => {
    let dataItemEl = document.createElement('article');
    dataItemEl.className = 'item';
    dataItemEl.innerHTML = articleTemplate(article);
    fragment.appendChild(dataItemEl);
  });
  container.appendChild(fragment);
}

export const CONTROLLER = (() => ({
  showArticle
}))();