import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

//FRAMES
//level 1
const frameFirst = document.querySelector(".frame__first--js");
const frameWorkout = document.querySelector(".frame__workout--js");
const frameHistory = document.querySelector(".frame__history--js");
const frameSettings = document.querySelector(".frame__settings--js");
//level 2
const frameStandard = document.querySelector(".frame__standard--js");
const frameModify = document.querySelector(".frame__modify--js");
const frameLevel = document.querySelector(".frame__level--js");
//level 3
const frameAction = document.querySelector(".frame__action--js");
const frameDone = document.querySelector(".frame__done--js");

//BUTTONS
//level 1
const start = document.querySelector(".start--js");
const history = document.querySelector(".history--js");
const settings = document.querySelector(".settings--js");
//level 2
const standard = document.querySelector(".standard--js");
const level = document.querySelector(".level--js");
const modify = document.querySelector(".modify--js");
//level 3
const go = document.querySelectorAll(".go--js");
//level 4
const done = document.querySelector(".done--js");
const home = document.querySelector(".home--js");

// 1 level
start.addEventListener("click", () => {
	frameFirst.classList.add("hide");
	frameWorkout.classList.remove("hide");
});
history.addEventListener("click", () => {
	frameFirst.classList.add("hide");
	frameHistory.classList.remove("hide");
});
settings.addEventListener("click", () => {
	frameFirst.classList.add("hide");
	frameSettings.classList.remove("hide");
});

// 2a level
standard.addEventListener("click", () => {
	frameWorkout.classList.add("hide");
	frameStandard.classList.remove("hide");
});
modify.addEventListener("click", () => {
	frameWorkout.classList.add("hide");
	frameModify.classList.remove("hide");
});

//3 level
go.forEach((input) => input.addEventListener("click", startGo));

function startGo() {
	frameStandard.classList.add("hide");
	frameModify.classList.add("hide");
	frameAction.classList.remove("hide");
};

//4 level
done.addEventListener("click", () => {
	frameAction.classList.add("hide");
	frameDone.classList.remove("hide");
});

home.addEventListener("click", () => {
	frameDone.classList.add("hide");
	frameFirst.classList.remove("hide");
});
