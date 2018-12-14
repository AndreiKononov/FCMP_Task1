import { appView } from "./constants";
import '../index.html';
import '../scss/main.scss';

const button = document.getElementById('showNews');

button.onclick = e => import('./news.js')
  .then(() => {
    appView.elementIsHidden(button);
  });
