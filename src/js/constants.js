import { showPopUp } from "./errorHandler";

const API_KEY = 'e9979803c3894fa182b399c482279297';
const HOST_URL = 'https://newsapi.org/v2/';
const SOURCES_PARAM = 'top-headlines';
const defaultLanguage = 'ru';
const MESSAGE = showPopUp.getInstance();

export {
  API_KEY,
  HOST_URL,
  SOURCES_PARAM,
  MESSAGE,
  defaultLanguage
};