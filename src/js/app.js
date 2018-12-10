import { News } from "./view";
import { API_KEY, HOST_URL, SOURCES_PARAM } from "./constants";
import { CONTROLLER } from "./controller";

export class App {
  init() {
    const newsBlock = new News(API_KEY, HOST_URL, SOURCES_PARAM);

    newsBlock.getData('us')
      .then(data => {CONTROLLER.showArticle(data)})
      .catch(error => console.log(error.message));
  }
}
