#! /usr/bin/env node

var isCompatible = require('../bin/is-compatible.js');

if (isCompatible() !== true) {

   console.log("> The minimum required Node.js version is 14.15. Please upgrade to continue.");
   console.log("> The minimum required npm version is 7.0.2. Please upgrade to continue.");
   console.log();
} else require("../bin/process-resources");