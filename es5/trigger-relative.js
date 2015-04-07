"use strict";

(function () {
    "use strict";

    var $$$es6$trigger$relative$$default = function $$$es6$trigger$relative$$default(element, eventName, detail) {
        return function (e) {
            return element && element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
        };
    };

    window.evpack = window.evpack || {};
    window.evpack.triggerRelative = $$$es6$trigger$relative$$default;
}).call(undefined);