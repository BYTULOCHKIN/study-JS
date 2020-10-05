"use strict";

function reverseStr(str) {
  let abc = str.toLowerCase();
  let normal = abc.split("").reverse().join("");
  if (abc !== normal) {
    return false;
  } 
  return true;
}
console.log(reverseStr("ivan"));
