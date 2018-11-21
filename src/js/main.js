(function () {
  'use strict';

  const newsBlock = new News(API_KEY, HOST_URL, SOURCES_PARAM);

  newsBlock.getData('us')
    .then(articlesList)
    .catch(error => console.log(error.message));
})();
