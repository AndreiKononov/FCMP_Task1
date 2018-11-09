'use strict';

const API_KEY = 'e9979803c3894fa182b399c482279297';
const HOST_URL = 'https://newsapi.org/v2';
const SOURCES_PARAM = '/top-headlines';

const url = `${HOST_URL}${SOURCES_PARAM}?country=us&apiKey=${API_KEY}`;
const req = new Request(url);
fetch(req)
  //.then(response => response.json()).then(myJson => console.log(JSON.stringify(myJson)))
   .then(response => {
   console.log(response.json());
   })
  .catch(error => console.log(error) );
