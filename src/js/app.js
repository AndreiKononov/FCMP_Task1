import { NewsModel } from "./model";
import { API_KEY, HOST_URL, SOURCES_PARAM } from "./constants";
import { VIEW } from "./view";
import { CONTROLLER } from "./controller";

const loader = document.getElementById("loader");
const container = document.getElementById('container');

const model = new NewsModel(API_KEY, HOST_URL, SOURCES_PARAM);
const appView = new VIEW.Renderer();

export class App {
  init() {
    model.getData('us')
      .then(data => {
        appView.loaderIsHidden(loader);
        appView.setView(container, CONTROLLER.getHTML(data))})
      .catch(error => console.log(error.message));
  }
}
