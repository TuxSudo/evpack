"use strict";

(function () {
    "use strict";

    var $$dispatcher$$default = function $$dispatcher$$default(element, eventName, detail) {
        element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
    };

    var $$$es6$element$sync$$default = function $$$es6$element$sync$$default(nodelist, rxtx) {

        // coerce node list to array
        var elements = Array.prototype.slice.call(nodelist),

        // get all other elements except for one from elements array
        getOthers = function (me) {
            return elements.filter(function (elm) {
                return me !== elm;
            });
        },

        // multiple elements dispatch same event
        dispatchAll = function (elements, eventName, data) {
            return elements.forEach(function (elm) {
                return $$dispatcher$$default(elm, eventName, data);
            });
        },

        // add rx listener to element which sends tx event(s) to others
        initElement = function (element) {
            var others = getOthers(element);
            Object.keys(rxtx).forEach(function (k) {
                return element.addEventListener(k, function (e) {
                    return dispatchAll(others, rxtx[k], e.detail);
                });
            });
        };

        elements.forEach(initElement);
    };

    window.evpack = window.evpack || {};
    window.evpack.elementSync = $$$es6$element$sync$$default;
}).call(undefined);