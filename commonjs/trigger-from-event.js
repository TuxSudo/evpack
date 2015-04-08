/* helper function to trigger another element's event

Usage: 

element1.addEventListner('click', triggerFromEvent(document.querySelector('.selector'), 'event.name', 'details' ) );


*/
"use strict";

module.exports = function (element, eventName, detail) {
    return function (e) {
        return element && element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
    };
};