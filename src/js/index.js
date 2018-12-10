import { News } from "./view";
import { API_KEY, HOST_URL, SOURCES_PARAM } from "./constants";
import { articlesList } from "./controller";
import '../scss/main.scss';
import '../scss/loader.scss';

(function () {
  'use strict';

  const newsBlock = new News(API_KEY, HOST_URL, SOURCES_PARAM);

  newsBlock.getData('ca')
    .then(articlesList)
    .catch(error => console.log(error.message));
})();
