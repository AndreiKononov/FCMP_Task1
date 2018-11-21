class News {
  constructor(API_KEY, HOST_URL, SOURCES_PARAM) {
    this.API_KEY = API_KEY;
    this.HOST_URL = HOST_URL;
    this.SOURCES_PARAM = SOURCES_PARAM;
  }
  getUrl(country) {
    return `${this.HOST_URL}${this.SOURCES_PARAM}?country=${country}&apiKey=${this.API_KEY}`
  }
  getData(country = 'ru') {
    return new Promise((resolve, reject) => {
      const url = this.getUrl(country);
      return fetch(url)
        .then((response) => {
          setTimeout(() => resolve(response.json()), 1000);
        })
    });
  }

  // async getData(country = 'ru') {
  //   const url = this.getUrl(country);
  //   const request = new Request(url);
  //   return await fetch(request)
  //     .then((response) => {
  //       setTimeout( () => response.json(), 1000);
  //     })
  // }

}
