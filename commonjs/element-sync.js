"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var dispatcher = _interopRequire(require("./dispatcher"));

/* 
rxtx should be object like: 
{
    'rxEvent1': 'txEvent1',
    'rxEvent2': 'txEvent2'
}
*/

module.exports = function (nodelist, rxtx) {

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
            return dispatcher(elm, eventName, data);
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