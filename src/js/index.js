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
//level 4 - action frames
const frameSquats = document.querySelector(".squats_action--js");
const frameSitups = document.querySelector(".situps_action--js");
const framePushups = document.querySelector(".pushups_action--js");

//BUTTONS
//querySelectors
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
const done = document.querySelectorAll(".done--js");
const home = document.querySelectorAll(".home--js");
const next = document.querySelectorAll(".next--js");
//ACTIONS ON BUTTONS
// 1 level
start.addEventListener("click", () => {
	frameFirst.classList.add("hide");
	frameWorkout.classList.remove("hide");
	updateExercises();
	dailyReset();
});
history.addEventListener("click", () => {
	frameFirst.classList.add("hide");
	frameHistory.classList.remove("hide");
	records();
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
go.forEach((input) => input.addEventListener("click", runGo));

go.forEach((input) => input.addEventListener("click", removeExerciseDisplay)); // to prevent innerhtml stacking later on

function runGo() {
	frameStandard.classList.add("hide");
	frameModify.classList.add("hide");
	frameAction.classList.remove("hide");
	action();
}

//4 level
done.forEach((input) =>
	input.addEventListener("click", () => {
		frameAction.classList.add("hide");
		frameDone.classList.remove("hide");
	})
);

home.forEach((input) => input.addEventListener("click", runHome));
function runHome() {
	frameDone.classList.add("hide");
	frameWorkout.classList.add("hide");
	frameSettings.classList.add("hide");
	frameHistory.classList.add("hide");
	frameLevel.classList.add("hide");
	frameFirst.classList.remove("hide");
}

next.forEach((input) =>
	input.addEventListener("click", () => {
		action();
	})
);

//END OF BUTTONS PART

function updateExercises() {
	//first get and parce array from local storage
	const localJSON = localStorage.getItem("exercises");
	const exerciseSetObject = JSON.parse(localJSON);
	// display current exercise set values taken from local storage
	function showExerciseSet() {
		if (exerciseSetObject) {
			Object.getOwnPropertyNames(exerciseSetObject).forEach((val) => {
				exerciseSetDisplay.forEach((input) => {
					input.innerHTML += `<p class="exercise_set">${val}: ${exerciseSetObject[val]}</p>`;
				});
			});
		}
	}
	showExerciseSet();
}

// del exercise display to prevent stacking dom elements
function removeExerciseDisplay() {
	const removeExercise = document.querySelectorAll(".exercise_set");
	removeExercise.forEach((input) => {
		input.remove();
	});
}

//places to show object items
const exerciseSetDisplay = document.querySelectorAll(".exercise_set--js");
//
//levels

level.addEventListener("click", () => {
	frameModify.classList.add("hide");
	frameLevel.classList.remove("hide");
});

const backToModify = document.querySelector(".to_modify--js");

backToModify.addEventListener("click", () => {
	frameLevel.classList.add("hide");
	frameModify.classList.remove("hide");
});

//level buttons
const lev1 = document.querySelector(".l1--js");
const lev2 = document.querySelector(".l2--js");
const lev3 = document.querySelector(".l3--js");
const lev4 = document.querySelector(".l4--js");
const lev5 = document.querySelector(".l5--js");
const lev6 = document.querySelector(".l6--js");
const lev7 = document.querySelector(".l7--js");
const lev8 = document.querySelector(".l8--js");
const lev9 = document.querySelector(".l9--js");
const lev10 = document.querySelector(".l10--js");

const defaultLevel = localStorage.getItem("level");
if (!defaultLevel) {
	localStorage.setItem("level", 1);
}

lev1.addEventListener("click", () => {
	localStorage.setItem("level", 1);
	levelDisplay.forEach((input) => {
		input.innerHTML = "1";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});
lev2.addEventListener("click", () => {
	localStorage.setItem("level", 2);
	levelDisplay.forEach((input) => {
		input.innerHTML = "2";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});
lev3.addEventListener("click", () => {
	localStorage.setItem("level", 3);
	levelDisplay.forEach((input) => {
		input.innerHTML = "3";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});
lev4.addEventListener("click", () => {
	localStorage.setItem("level", 4);
	levelDisplay.forEach((input) => {
		input.innerHTML = "4";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});
lev5.addEventListener("click", () => {
	localStorage.setItem("level", 5);
	levelDisplay.forEach((input) => {
		input.innerHTML = "5";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});
lev6.addEventListener("click", () => {
	localStorage.setItem("level", 6);
	levelDisplay.forEach((input) => {
		input.innerHTML = "6";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});
lev7.addEventListener("click", () => {
	localStorage.setItem("level", 7);
	levelDisplay.forEach((input) => {
		input.innerHTML = "7";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});
lev8.addEventListener("click", () => {
	localStorage.setItem("level", 8);
	levelDisplay.forEach((input) => {
		input.innerHTML = "8";
		levelUpdate();
		removeExerciseDisplay();
		updateExercises();
	});
});
lev9.addEventListener("click", () => {
	localStorage.setItem("level", 9);
	levelDisplay.forEach((input) => {
		input.innerHTML = "9";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});

lev10.addEventListener("click", () => {
	localStorage.setItem("level", 10);
	levelDisplay.forEach((input) => {
		input.innerHTML = "10";
	});
	levelUpdate();
	removeExerciseDisplay();
	updateExercises();
});

const levelDisplay = document.querySelectorAll(".level_display--js");

function levelUpdate() {
	const entryLevel = localStorage.getItem("level");
	let resultLevel = "";
	if (entryLevel) {
		resultLevel = entryLevel;
	}
	localStorage.setItem(
		"exercises",
		JSON.stringify({
			squats: resultLevel * 10,
			situps: resultLevel * 10,
			pushups: resultLevel * 10,
		})
	);
	levelDisplay.forEach((input) => {
		input.innerHTML = resultLevel;
	});
}

levelUpdate();

// main action

const squatsCounter = document.querySelector(".squats__count--js");
const situpsCounter = document.querySelector(".situps__count--js");
const pushupsCounter = document.querySelector(".pushups__count--js");

// local storage for daily ex, starting flow
let localSquats = localStorage.getItem("daily squats");
let dailySquats = 0;
if (localSquats) {
	dailySquats = JSON.parse(localSquats);
} else {
	localStorage.setItem("daily squats", JSON.stringify(0));
	dailySquats = localSquats;
}

let localSitups = localStorage.getItem("daily situps");
let dailySitups = 0;
if (localSitups) {
	dailySitups = JSON.parse(localSitups);
} else {
	localStorage.setItem("daily situps", JSON.stringify(0));
	dailySitups = localSitups;
}

let localPushups = localStorage.getItem("daily pushups");
let dailyPushups = 0;
if (localPushups) {
	dailyPushups = JSON.parse(localPushups);
} else {
	localStorage.setItem("daily pushups", JSON.stringify(0));
	dailyPushups = localPushups;
}
//

function action() {
	//first get data from local storage
	const localJSON = localStorage.getItem("exercises");
	const exerciseSetObject = JSON.parse(localJSON);
	const ex = exerciseSetObject;

	const { squats, pushups, situps } = ex;

	// main loop

	if (squats && squatsFlag !== true) {
		squatsCounter.innerHTML = `do ${squats} squats`;
		squatsArc();
		let localSquats = localStorage.getItem("daily squats");
		dailySquats = JSON.parse(localSquats);
		dailySquats += squats;
		localStorage.setItem("daily squats", JSON.stringify(dailySquats));

		exerciseHistory();
	} else if (pushups && pushupsFlag !== true) {
		pushupsCounter.innerHTML = `do ${pushups} pushups`;
		pushupsArc();
		let localPushups = localStorage.getItem("daily pushups");
		dailyPushups = JSON.parse(localPushups);
		dailyPushups += pushups;
		localStorage.setItem("daily pushups", JSON.stringify(dailyPushups));

		exerciseHistory();
	} else if (situps && situpsFlag !== true) {
		situpsCounter.innerHTML = `do ${situps} situps`;
		situpsArc();
		let localSitups = localStorage.getItem("daily situps");
		dailySitups = JSON.parse(localSitups);
		dailySitups += situps;
		localStorage.setItem("daily situps", JSON.stringify(dailySitups));
		exerciseHistory();
	} else {
		frameSitups.classList.add("hide");
		framePushups.classList.add("hide");
		frameSquats.classList.add("hide");
		frameAction.classList.add("hide");
		frameDone.classList.remove("hide");
	}
}

//flags

let squatsFlag = false;
let situpsFlag = false;
let pushupsFlag = false;

// flags: make temporarly local storage to hold record for multisessions in same day, to calculate total exercise number for history local storage

// function dailyEx() {
// 	localHistory = localStorage.getItem("history");
// 	resultHistory = JSON.parse(localHistory);
// 	console.log(resultHistory[0]);
// 	let dailySquats = squatsNumDone;

// 	console.log(dailySquats);
// }

// exercise arcs

function squatsArc() {
	frameSitups.classList.add("hide");
	framePushups.classList.add("hide");
	frameSquats.classList.remove("hide");
	squatsFlag = true;
}
function pushupsArc() {
	frameSitups.classList.add("hide");
	framePushups.classList.remove("hide");
	frameSquats.classList.add("hide");
	pushupsFlag = true;
}
function situpsArc() {
	frameSitups.classList.remove("hide");
	framePushups.classList.add("hide");
	frameSquats.classList.add("hide");
	situpsFlag = true;
}

// date

const day = new Date();

let currentDay = "13.02.2012"; //day.toLocaleString("pl-PL").slice(0, 10);
let thisDay = currentDay;

let localHistory = localStorage.getItem("history");
let resultHistory = "";

//settings 'history' localstorage for the first time
if (localHistory) {
	resultHistory = localHistory;
} else {
	localStorage.setItem(
		"history",
		JSON.stringify([{ currentDay, dailySitups, dailyPushups, dailySquats }])
	);
	localHistory = localStorage.getItem("history");
	resultHistory = localHistory;
}

// funcion saving exercises as an array of objects in local storage, each object being separate day. If changing current day, it will replace only current day object, while if that does not exist, will make new obj.
function exerciseHistory() {
	let localHistory = localStorage.getItem("history");
	let resultHistory = JSON.parse(localHistory);

	if (resultHistory[0].currentDay === thisDay) {
		//find the index of object from array to update, check is object currentDay value same as global variable checking actual date
		const objIndex = resultHistory.findIndex(
			(obj) => obj.currentDay === thisDay
		);

		//make new object of updated object
		const updatedObj = {
			...resultHistory[objIndex],
			dailySitups,
			dailyPushups,
			dailySquats,
		};

		//make final new array of objects by combining updated object
		const updatedHistory = [
			...resultHistory.slice(0, objIndex),
			updatedObj,
			...resultHistory.slice(objIndex + 1),
		];

		//save to local storage
		localStorage.setItem("history", JSON.stringify(updatedHistory));
	} else {
		resultHistory.unshift({
			currentDay,
			dailySitups,
			dailyPushups,
			dailySquats,
		});
		localStorage.setItem("history", JSON.stringify(resultHistory));
		console.log("else");
	}
}

// display history;

const historyDisplay = document.querySelector(".history__display--js");

function records() {
	localHistory = localStorage.getItem("history");
	resultHistory = JSON.parse(localHistory);
	historyDisplay.innerHTML = `${resultHistory[0].currentDay}: squats - ${resultHistory[0].squatsNumDone};`;
}

//
function dailyReset() {
	let localHistory = localStorage.getItem("history");
	let resultHistory = JSON.parse(localHistory);
	if (resultHistory[0].currentDay !== thisDay) {
		dailySitups = 0;
		localStorage.setItem("daily situps", JSON.stringify(dailySitups));
		dailyPushups = 0;
		localStorage.setItem("daily pushups", JSON.stringify(dailyPushups));
		dailySquats = 0;
		localStorage.setItem("daily squats", JSON.stringify(dailySquats));
	}
}