import {
  onFinish as onStage1Finish,
  restart as restartStage1,
} from "./stage1.js";
import {
  onFinish as onStage2Finish,
  restart as restartStage2,
} from "./stage2.js";


/**
 * The exercise is devided into two parts called (stage-1) and (stage-2)
 * - (stage-1) contains from start to the end of the three circles case.
 * - (stage-2) contains middle-circle and left-right circles case.
 */

// retrieve the stages wrappers
const wrapperStage1 = document.querySelectorAll(".stage-1.wrapper")[0];
const wrapperStage2 = document.querySelectorAll(".stage-2.wrapper")[0];

/**
 * starts the stage-1 exercise
 */
const startStage1 = () => {
    restartStage1();
    wrapperStage1.classList.remove("hide-deep");
    wrapperStage2.classList.add("hide-deep");
}
/**
 * starts the stage-2 exercise
 */
const startStage2 = () => {
    restartStage2();
    wrapperStage1.classList.add("hide-deep");
    wrapperStage2.classList.remove("hide-deep");
}
/**
 * starts the stage from the given name
 * - possible values ['stage-1', 'stage-2']
 * @param {string} name
 * @returns {void} returns nothing
 */
const startStage = (name) => {
  switch (name) {
    case "stage-1":
      startStage1();
      break;
    case "stage-2":
        startStage2();
      break;
  }
}

// called when stage-1 finishes
onStage1Finish(() => {
  setTimeout(() => {
    startStage("stage-2");
  }, 500);
});

// called when stage-2 finishes
onStage2Finish(() => {
  setTimeout(() => {
    startStage("stage-1");
  }, 500);
});

// start the first stage
startStage("stage-1");
