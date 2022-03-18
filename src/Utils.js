

/**
 * Utils class
 */
class Utils {
    
    callbacksStage1 = [];
    callbacksStage2 = [];

    constructor() { }

    /**
     * hides the given HTML Element
     * @param {HTMLElement} element
     * @returns {void} returns nothing 
     */
    hideSquare = (element) => {
        element.classList.add("hide");
    }
    /**
     * shows the given HTML Element
     * @param {HTMLElement} element
     * @returns {void} returns nothing 
     */
    showSquare = (element) => {
        element.classList.remove("hide");
    }
    /**
     * registers the callback for the stage-1.
     * @param {Function} callback
     * @returns {void} returns nothing
     */
    registerCallbackStage1 = (callback) => {
        this.callbacksStage1.push(callback);
    }
    /**
     * registers the callback for the stage-2.
     * @param {Function} callback
     * @returns {void} returns nothing
     */
    registerCallbackStage2 = (callback) => {
        this.callbacksStage2.push(callback);
    }
    /**
     * triggers the callbacks registered to the stage-1.
     * @returns {void} returns nothing
     */
    triggerFinishCallbacksStage1 = () => {
        this.callbacksStage1.forEach(callback => {
            callback();
        });
    }
    /**
     * triggers the callbacks registered to the stage-2.
     * @returns {void} returns nothing
     */
    triggerFinishCallbacksStage2 = () => {
        this.callbacksStage2.forEach(callback => {
            callback();
        });
    }
}

// create a new instance of Utils class and share. (singleton)
export const __utils = new Utils();