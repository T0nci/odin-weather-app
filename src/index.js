import "./assets/css/style.css";
import getWeatherData from "./assets/js/data";
import { initializeSearchForm, showWeatherData } from "./assets/js/dom";

getWeatherData("london", showWeatherData);
initializeSearchForm(getWeatherData, showWeatherData);
