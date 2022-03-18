import { __utils } from "./Utils.js";

// retrieve the dom elements
const squaresLeft = document.querySelectorAll(".stage-2 .square-left");
const squareMiddle = document.querySelectorAll(".stage-2 .square-middle")[0];
const squaresRight = document.querySelectorAll(".stage-2 .square-right");
const squareTopLeft = squaresLeft[0];
const squareTopRight = squaresRight[0];
var canFinish = false;

/**
 * resets the DOM to the starting point of the stage-2
 * @returns {void} returns nothing
 */
const resetDom = () => {
    squaresLeft.forEach((squareLeft, index) => {
        squareLeft.classList.add("hide");
        squaresRight[index].classList.add("hide");
    });
}
/**
 * responsible to hide and show the squares from the given index
 * @param {number} index 
 * @returns {void} returns nothing
 */
const hideShowSquaresFromIndex = (index) => {
    __utils.hideSquare(squaresLeft[index]);
    __utils.hideSquare(squaresRight[index]);

    // check if the last squre of the stage-2;
    const isLastSquare = (index+1 >= squaresLeft.length);
    if(isLastSquare) {
        canFinish = true;
        __utils.showSquare(squareMiddle);
        return;
    }

    __utils.showSquare(squaresLeft[index+1]);
    __utils.showSquare(squaresRight[index+1]);
}
/**
 * initializes the events
 * @returns {void} returns nothing
 */
const initEvents = () => {
    // event for the middle square
    squareMiddle.addEventListener("click", e => {
        if(canFinish) {
            __utils.triggerFinishCallbacksStage2();
            return;
        }
        __utils.hideSquare(squareMiddle);
        squareTopLeft.classList.remove("hide");
        squareTopRight.classList.remove("hide");
    });
    // events for the left and right squares
    squaresLeft.forEach((square, index) => {
        // event for the left squares
        squaresLeft[index].addEventListener("click", e => {
            hideShowSquaresFromIndex(index); 
        });
        // event for the right squares
        squaresRight[index].addEventListener("click", e => {
            hideShowSquaresFromIndex(index);
        });
    });
}
/**
 * registers the callbacks.  
 * callbacks will be triggers when the state-2 finishes
 * @param {Function} callback
 * @returns {void} returns nothing
 */
export const onFinish = (callback) => {
    __utils.registerCallbackStage2(callback);
}
/**
 * restarts the stage-2
 * @returns {void} returns nothing
 */
export const restart = () => {
    canFinish = false;
    resetDom();
}

//initialize the events now
initEvents();
