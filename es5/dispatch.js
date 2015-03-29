"use strict";

(function () {
    "use strict";

    var $$$es6$dispatcher$$default = function $$$es6$dispatcher$$default(element, eventName, detail) {
        element.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
    };

    window.evpack = window.evpack || {};
    window.evpack.dispatcher = $$$es6$dispatcher$$default;
}).call(undefined);