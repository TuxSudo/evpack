"use strict";

(function () {
    "use strict";

    var $$$es6$relay$$default = function $$$es6$relay$$default(eventName, detail, callback) {

        return function (e) {
            this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: detail }));
            return callback && callback(e);
        };
    };

    window.evpack = window.evpack || {};
    window.evpack.relay = $$$es6$relay$$default;
}).call(undefined);