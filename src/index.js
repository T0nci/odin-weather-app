import "./assets/css/style.css";
import getWeatherData from "./assets/js/data";
import { initializeSearchForm } from "./assets/js/dom";

getWeatherData();
initializeSearchForm(getWeatherData);
