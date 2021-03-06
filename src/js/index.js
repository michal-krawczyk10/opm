import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

//FRAMES
const frameFirst = document.querySelector(".frame__first--js");
const frameWorkout = document.querySelector(".frame__workout--js");
const frameHistory = document.querySelector(".frame__history--js");
const frameSettings = document.querySelector(".frame__settings--js");
const frameStandard = document.querySelector(".frame__standard--js");
const frameModify = document.querySelector(".frame__modify--js");
const frameLevel = document.querySelector(".frame__level--js");
const frameAction = document.querySelector(".frame__action--js");
const frameDone = document.querySelector(".frame__done--js");
// action frames
const frameSquats = document.querySelector(".squats_action--js");
const frameSitups = document.querySelector(".situps_action--js");
const framePushups = document.querySelector(".pushups_action--js");
const frameRepeat = document.querySelector(".frame__repeat--js");
const frameAbout = document.querySelector(".frame__about--js");

const frameSq1st = document.querySelector(".sqFirst--js");
const frameSi1st = document.querySelector(".siFirst--js");
const framePu1st = document.querySelector(".puFirst--js");
const frameMore = document.querySelectorAll(".more--js");
const framePartDone = document.querySelector(".part_done--js");
const header = document.querySelector(".header--js");
const frameBefore = document.querySelector(".frame__before--js");
const frameAchiv = document.querySelector(".frame__achiv--js");

//BUTTONS
//querySelectors

const start = document.querySelector(".start--js");
const history = document.querySelector(".history--js");
const settings = document.querySelector(".settings--js");
const standard = document.querySelector(".standard--js");
const level = document.querySelector(".level--js");
const modify = document.querySelector(".modify--js");
const backToWorkout = document.querySelectorAll(".to_workout--js");
const go = document.querySelectorAll(".go--js");
const done = document.querySelectorAll(".done--js");
const home = document.querySelectorAll(".home--js");
const next = document.querySelectorAll(".next--js");
const repeat = document.querySelectorAll(".repeat--js");
const deleteRecords = document.querySelectorAll(".deleteRecord--js");
const about = document.querySelector(".about--js");
const before = document.querySelector(".button__before--js");
const backToToday = document.querySelector(".backToToday--js");
const achiv = document.querySelector(".achiv--js");
const reload = document.querySelector(".reload--js");

//main loop part
const goOn = document.querySelectorAll(".go_on--js");
const sqCount = document.querySelectorAll(".sq_count--js");
const puCount = document.querySelectorAll(".pu_count--js");
const siCount = document.querySelectorAll(".si_count--js");
const setResult = document.querySelector(".done-cnt--js");

//ACTIONS ON BUTTONS (most of them)

start.addEventListener("click", () => {
	frameFirst.classList.add("hide");
	frameWorkout.classList.remove("hide");
	updateExercises();
	dailyReset();
});
history.addEventListener("click", () => {
	frameWorkout.classList.add("hide");
	header.classList.add("hide");
	frameHistory.classList.remove("hide");
	today();
});

before.addEventListener("click", () => {
	frameHistory.classList.add("hide");
	frameBefore.classList.remove("hide");
	records();
});
backToToday.addEventListener("click", () => {
	frameBefore.classList.add("hide");
	frameHistory.classList.remove("hide");
});

// settings.addEventListener("click", () => {
// 	frameFirst.classList.add("hide");
// 	frameSettings.classList.remove("hide");
// });

standard.addEventListener("click", () => {
	frameWorkout.classList.add("hide");
	frameStandard.classList.remove("hide");
});

go.forEach((input) => input.addEventListener("click", runGo));

go.forEach((input) => input.addEventListener("click", removeExerciseDisplay)); // to prevent innerhtml stacking later on

deleteRecords.forEach((input) => input.addEventListener("click", deleteRecord));

backToWorkout.forEach((input) =>
	input.addEventListener("click", () => {
		frameAchiv.classList.add("hide");
		frameStandard.classList.add("hide");
		frameModify.classList.add("hide");
		frameHistory.classList.add("hide");
		frameWorkout.classList.remove("hide");
		header.classList.remove("hide");
	})
);

function runGo() {
	frameStandard.classList.add("hide");
	frameModify.classList.add("hide");
	header.classList.add("hide");
	frameAction.classList.remove("hide");
	action();
}

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
	frameRepeat.classList.add("hide");
	frameAbout.classList.add("hide");
	frameFirst.classList.remove("hide");
	header.classList.remove("hide");
	removeExerciseDisplay();
}

next.forEach((input) =>
	input.addEventListener("click", () => {
		framePartDone.classList.add("hide");
		action();
	})
);

repeat.forEach((input) =>
	input.addEventListener("click", () => {
		allFlag = false;
		squatsFlag = false;
		situpsFlag = false;
		pushupsFlag = false;
		frameRepeat.classList.add("hide");
		frameAction.classList.remove("hide");
		action();
	})
);

about.addEventListener("click", () => {
	frameFirst.classList.add("hide");
	frameAbout.classList.remove("hide");
});

achiv.addEventListener("click", () => {
	frameWorkout.classList.add("hide");
	frameAchiv.classList.remove("hide");
});
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
	frameStandard.classList.add("hide");
	header.classList.add("hide");
	frameLevel.classList.remove("hide");
});

const backToModify = document.querySelectorAll(".to_modify--js");

backToModify.forEach((input) => {
	input.addEventListener("click", () => {
		frameLevel.classList.add("hide");
		header.classList.remove("hide");
		frameStandard.classList.remove("hide");
	});
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
	if (allFlag === true) {
		frameStandard.classList.add("hide");
		frameAction.classList.add("hide");
		frameRepeat.classList.remove("hide");
	} else if (squats && squatsFlag !== true) {
		squatsCounter.innerHTML = `do 10 squats`;
		squatsArc();
		squatsFlag = true;
		exerciseHistory();
	} else if (pushups && pushupsFlag !== true) {
		pushupsCounter.innerHTML = `do 10 push ups`;
		pushupsArc();
		pushupsFlag = true;
		exerciseHistory();
	} else if (situps && situpsFlag !== true) {
		situpsCounter.innerHTML = `do 10 sit ups`;
		situpsArc();
		situpsFlag = true;
		exerciseHistory();
	}
}
// main loop arcs

function squatsArc() {
	frameSitups.classList.add("hide");
	framePushups.classList.add("hide");
	frameSquats.classList.remove("hide");
	let stage = 0;
	const entryLevel = localStorage.getItem("level");
	let resultLevel = "";
	if (entryLevel) {
		resultLevel = entryLevel;
	}
	if (stage === 0) {
		frameSq1st.classList.remove("hide");
		stage++;
		blankCount();
		goOn.forEach((input) =>
			input.addEventListener("click", () => {
				if (stage !== 0 && stage < resultLevel) {
					blankCount();
					frameSq1st.classList.add("hide");
					frameMore.forEach((input) => input.classList.remove("hide"));
					let localSquats = localStorage.getItem("daily squats");
					dailySquats = JSON.parse(localSquats);
					dailySquats += 10;
					localStorage.setItem("daily squats", JSON.stringify(dailySquats));
					stage++;

					sqCount.forEach((input) => {
						input.innerHTML += `you did ${(stage - 1) * 10}/${
							resultLevel * 10
						} squats`;
					});
				} else if (stage == resultLevel) {
					let localSquats = localStorage.getItem("daily squats");
					dailySquats = JSON.parse(localSquats);
					dailySquats += 10;
					localStorage.setItem("daily squats", JSON.stringify(dailySquats));
					frameSq1st.classList.add("hide");
					frameMore.forEach((input) => input.classList.add("hide"));
					frameSquats.classList.add("hide");
					framePartDone.classList.remove("hide");

					stage = 0;
				}
			})
		);
	}
}

function pushupsArc() {
	frameSitups.classList.add("hide");
	framePushups.classList.remove("hide");
	frameSquats.classList.add("hide");
	let stage = 0;
	const entryLevel = localStorage.getItem("level");
	let resultLevel = "";
	if (entryLevel) {
		resultLevel = entryLevel;
	}
	if (stage === 0) {
		framePu1st.classList.remove("hide");
		stage++;
		blankCount();
		goOn.forEach((input) =>
			input.addEventListener("click", () => {
				if (stage !== 0 && stage < resultLevel) {
					blankCount();
					framePu1st.classList.add("hide");
					frameMore.forEach((input) => input.classList.remove("hide"));

					let localPushups = localStorage.getItem("daily pushups");
					dailyPushups = JSON.parse(localPushups);
					dailyPushups += 10;
					localStorage.setItem("daily pushups", JSON.stringify(dailyPushups));
					stage++;
					puCount.forEach((input) => {
						input.innerHTML += `you did ${(stage - 1) * 10}/${
							resultLevel * 10
						} push ups`;
					});
				} else if (stage == resultLevel) {
					let localPushups = localStorage.getItem("daily pushups");
					dailyPushups = JSON.parse(localPushups);
					dailyPushups += 10;
					localStorage.setItem("daily pushups", JSON.stringify(dailyPushups));
					framePushups.classList.add("hide");
					framePu1st.classList.add("hide");
					frameMore.forEach((input) => input.classList.add("hide"));
					framePartDone.classList.remove("hide");
					stage = 0;
				}
			})
		);
	}
}

function situpsArc() {
	frameSitups.classList.remove("hide");
	framePushups.classList.add("hide");
	frameSquats.classList.add("hide");
	let stage = 0;
	let doneEx = 0;
	const entryLevel = localStorage.getItem("level");
	let resultLevel = "";
	if (entryLevel) {
		resultLevel = entryLevel;
	}
	if (stage === 0) {
		frameSi1st.classList.remove("hide");
		stage++;
		blankCount();
		goOn.forEach((input) =>
			input.addEventListener("click", () => {
				if (stage !== 0 && stage < resultLevel) {
					blankCount();
					frameSi1st.classList.add("hide");
					frameMore.forEach((input) => input.classList.remove("hide"));

					let localSitups = localStorage.getItem("daily situps");
					dailySitups = JSON.parse(localSitups);
					dailySitups += 10;
					localStorage.setItem("daily situps", JSON.stringify(dailySitups));
					stage++;
					siCount.forEach((input) => {
						input.innerHTML += `you did ${(stage - 1) * 10}/${
							resultLevel * 10
						} sit ups`;
					});
				} else if (stage == resultLevel) {
					let localSitups = localStorage.getItem("daily situps");
					dailySitups = JSON.parse(localSitups);
					dailySitups += 10;
					localStorage.setItem("daily situps", JSON.stringify(dailySitups));
					frameSi1st.classList.add("hide");
					frameMore.forEach((input) => input.classList.add("hide"));
					stage = 0;

					frameSitups.classList.add("hide");
					frameAction.classList.add("hide");
					frameDone.classList.remove("hide");
					const entryLevel = localStorage.getItem("level");
					setResult.innerHTML = `<p>this time you did:</p><p>squats - ${
						entryLevel * 10
					}</p><p>push ups - ${entryLevel * 10}</p><p>sit ups - ${
						entryLevel * 10
					}`;
					allFlag = true;
				}
			})
		);
	}
}

// function to prevent stacking inner html dom elements
function blankCount() {
	sqCount.forEach((input) => {
		input.innerHTML = "";
	});
	puCount.forEach((input) => {
		input.innerHTML = "";
	});
	siCount.forEach((input) => {
		input.innerHTML = "";
	});
}

//flags (super useful)

let squatsFlag = false;
let situpsFlag = false;
let pushupsFlag = false;
let allFlag = false;

//date

const day = new Date();

let currentDay = day.toLocaleString("pl-PL").slice(0, 10);
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
	}
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

// display history;

const historyDisplay = document.querySelector(".history__display--js");

function records() {
	localHistory = localStorage.getItem("history");
	resultHistory = JSON.parse(localHistory);
	resultHistory.shift();
	resultHistory.forEach((arrayItem) => {
		historyDisplay.innerHTML += `<div class="container__before--item records--js">
				<p>${arrayItem.currentDay}</p>
					<div class="container__before--line">
						<span>sit ups</span>
						<span class="right">${arrayItem.dailySitups}</span>
					</div>
					<div class="container__before--line">
						<span>squats</span>
						<span class="right">${arrayItem.dailySquats}</span>
					</div>
					<div class="container__before--line">
						<span>push ups</span>
						<span class="right">${arrayItem.dailyPushups}</span>
					</div>
			</div>`;
	});
}

function deleteRecord() {
	const recordElement = document.querySelectorAll(".records--js");
	recordElement.forEach((input) => {
		input.remove();
	});
}

//today records (run on click event on history element)

const todaySquats = document.querySelector(".today__squats--js");
const todaySitups = document.querySelector(".today__situps--js");
const todayPushups = document.querySelector(".today__pushups--js");

function today() {
	todaySquats.innerHTML = `${dailySquats}`;
	todaySitups.innerHTML = `${dailySitups}`;
	todayPushups.innerHTML = `${dailyPushups}`;
}

// random quote generator
let quotes = [
	"Human beings are strong because we have the ability to change ourselves.",
	"If you really want to be strong, stop caring about what others think about you.",
	"I’ll leave tomorrow’s problems to tomorrow’s me.",
	"Do not fight alone.",
	"You gotta train like hell until the point where your hair falls out. That’s the only way to become truly strong.",
	"100 push-ups, 100 sit-ups, 100 squats, and a 10km run EVERY SINGLE DAY!",
	"A hero must be tough, strong and beautiful ,as well as be able to promptly and splendidly eradicate evil.",
	"You have to keep doing it. No matter how difficult it gets.",
	"I do it because I want to!",
	"You are too young to worry about failure.",
	"Instead of sitting around frustrated, it is better to keep on moving forward.",
	"Human beings are strong because we have the ability to change ourselves.",
	"Is that the limit of your strength? Could the you of tomorrow beat you of today? Instead of giving in, move forward.",
	"If the heroes run and hide, who will stay and fight?",
	"You said you worked hard? Well, maybe you need to work a little longer.",
	"If you don’t want to get bossed around or mocked by the people around you… you just need to become stronger.",
];

let randomQuote = Math.floor(Math.random() * quotes.length);

const quoteDisplay = document.querySelector(".quote--js");

quoteDisplay.innerHTML = quotes[randomQuote];

//achievmenst

// let localWorkouts = localStorage.getItem("workouts done");
// let workouts = 0;
// if (localWorkouts) {
// 	workouts = JSON.parse(localWorkouts);
// 	console.log("if");
// } else {
// 	localStorage.setItem("workouts done", JSON.stringify(0));
// 	workouts = localWorkouts;
// }

//reload on click (temporarly, to make site updates easier)

reload.addEventListener("click", () => {
	location.reload();
	console.log("s");
});
