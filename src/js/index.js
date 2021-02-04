import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const frameFirst = document.querySelector(".frame__first");
const frameWorkout = document.querySelector(".frame__workout");
const framehistory = document.querySelector('.history--js');
const frameSettings = document.querySelector('.settings--js');


const start = document.querySelector(".start--js");
const history = document.querySelector(".history--js");
const settings = document.querySelector(".settings--js");
const go = document.querySelector(".go--js");
const modify = document.querySelector("modify--js");

start.addEventListener("click", () => {
	frameFirst.classList.add('hide');
  frameWorkout.classList.remove('hide');
});

history.addEventListner("click", () => {
  frameFirst.classList.add('hide');
  frameHistory.classList.remove('hide');
});