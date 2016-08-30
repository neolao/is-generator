"use strict";

let assert = require("assert");
let isGenerator = require("./index.js");


assert.strictEqual(isGenerator(function*(){}), true);
assert.strictEqual(isGenerator(function(){}), false);
