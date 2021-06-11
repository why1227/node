"use strict";

var fs = require('fs');

var path = require('path');

console.log(path.join(__dirname, '01-hello_world.js'));
fs.readFile(path.join(__dirname, '01-hello_world.js'), 'utf8', function (err, doc) {
  console.log(err); // console.log(doc);
});