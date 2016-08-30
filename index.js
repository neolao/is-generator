"use strict";

module.exports = function(target) {

    if (typeof target !== "function") {
        return false;
    }

    if ("GeneratorFunction" !== target.constructor.name) {
        return false;
    }

    return true;

};

