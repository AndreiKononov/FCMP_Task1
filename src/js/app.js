import { NewsModel } from "./model";
import { API_KEY, HOST_URL, SOURCES_PARAM, MESSAGE } from "./constants";
import { appView } from "./constants";
import { CONTROLLER } from "./controller";

const loader = document.getElementById("loader");
const container = document.getElementById('container');
const model = new NewsModel(API_KEY, HOST_URL, SOURCES_PARAM);

export class App {
  init() {
    model.getData('us')
      .then(data => {
        appView.elementIsHidden(loader);
        appView.setView(container, CONTROLLER.getHTML(data))})
       .catch((error) => MESSAGE.display(error));
  }
}
