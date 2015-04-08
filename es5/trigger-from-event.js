"use strict";

(function () {
    "use strict";

    var $$$es6$trigger$from$event$$default = function $$$es6$trigger$from$event$$default(element, eventName, detail) {
        return function (e) {
            return element && element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
        };
    };

    window.evpack = window.evpack || {};
    window.evpack.triggerFromEvent = $$$es6$trigger$from$event$$default;
}).call(undefined);