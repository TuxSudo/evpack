"use strict";

module.exports = function (eventName, detail, callback) {

    return function (e) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
        return callback && callback(e);
    };
};