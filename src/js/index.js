import { News } from "./view";
import { API_KEY, HOST_URL, SOURCES_PARAM } from "./constants";
import { articlesList } from "./controller";

(function () {
  'use strict';

  const newsBlock = new News(API_KEY, HOST_URL, SOURCES_PARAM);

  newsBlock.getData()
    .then(articlesList)
    .catch(error => console.log(error.message));
})();
