"use strict";

module.exports = function (element, eventName, detail) {
    element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
};