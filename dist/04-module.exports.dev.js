"use strict";

var greeting = function greeting(name) {
  return "\u4F60\u597D ".concat(name, "\uFF01");
};

var x = 100;
module.exports.greeting = greeting;
exports.x = x; // 当exports对象和moudle.exports对象指向的不是同一个对象时 以module.exports为准

module.exports = {
  name: "张三"
};
exports = {
  age: 20
};