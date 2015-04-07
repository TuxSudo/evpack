"use strict";

module.exports = function (element, eventName, detail) {
    return function (e) {
        return element && element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
    };
};