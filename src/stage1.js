import { __utils } from "./Utils.js";

// retrieve the dom elements
const squares = document.querySelectorAll(".stage-1 .square");
const firstSquare = squares[squares.length-1];
const lastSquare = squares[0];
const centerCircle = squares[3];

/**
 * stage-1 is devided into two steps (2-steps)
 * - step 3 will trigger to the next staget (stage-2)
 */
var step = 1;

/**
 * resets the DOM to the starting point of the stage-1
 * @returns {void} returns nothing
 */
const resetDom = () => {
    squares.forEach((square) => {
        square.removeAttribute("style");
        square.classList.remove("circle");
        square.classList.add("hide");
    });
    firstSquare.classList.remove("hide");
}
/**
 * responsible to hide and show the squares from the given index
 * @param {number} index 
 * @returns {void} returns nothing
 */
const hideShowSquaresFromIndex = (index) => {
    if(step !== 1) return;
    if(index === 0) { step = 2; return; }
    __utils.hideSquare(squares[index]);
    __utils.showSquare(squares[index-1]);    
}
/**
 * initializes the events
 * @returns {void} returns nothing
 */
const initEvents = () => {
    // event on each square
    squares.forEach((square, index) => {
        square.addEventListener("click", e => {
            hideShowSquaresFromIndex(index);
        });
    });
    // event for the first square
    firstSquare.addEventListener("click", e => {
        if(step !== 3) return;
        __utils.triggerFinishCallbacksStage1();
    });
    // event for the last square
    lastSquare.addEventListener("click", e => {
        if(step !== 2) return;
        lastSquare.classList.add("circle");
        centerCircle.classList.add("circle");
        setTimeout(() => {
            centerCircle.classList.remove("hide");
        }, 500);
    });
    // event for the center circle
    centerCircle.addEventListener("click", e => {
        if(step !== 2) return;
        firstSquare.classList.add("circle");
        firstSquare.style.setProperty("margin-left", `85.71428571428572%`);    
        setTimeout(() => {
            step = 3;
            firstSquare.classList.remove("hide");
        }, 500);
    });
}
/**
 * registers the callbacks.  
 * callbacks will be triggers when the state-1 finishes
 * @param {Function} callback
 * @returns {void} returns nothing
 */
export const onFinish = (callback) => {
    __utils.registerCallbackStage1(callback);
}
/**
 * restarts the stage-1
 * @returns {void} returns nothing
 */
export const restart = () => {
    step = 1;
    resetDom();
}

//initialize the events now
initEvents();


