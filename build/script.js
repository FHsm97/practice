"use strict";
let firstname = 'fatemeh';
// firstname=12; error
let lastname;
lastname = 'hashemi';
console.log(lastname);
lastname = 55;
console.log(lastname);
let age = 25;
let student = false;
// let height:string=162; error
let list = [1, 2, 3];
// list=['1','2','3'] error
console.log(list);
let list2 = ['1', '2', '3'];
let list3 = ['fatemeh', 25, true];
list3[0] = 254;
let tuple = ['hashemi', 654];
// let tuple2:[string,number]=['hashemi',654,10] error
let num = 22;
num = null;
let fname = 'fatemeh';
fname = getString();
function getString() {
    return undefined;
}
function log(message) {
    // return message; error
    console.log(message);
}
log('hello world!');
//enum
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Right);
console.log(Direction);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 20] = "Up";
    Direction1[Direction1["Down"] = 30] = "Down";
    Direction1[Direction1["Left"] = 40] = "Left";
    Direction1[Direction1["Right"] = 50] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
// console.log(Direction1.Left=100); error enums=>just readOnly
let dir = Direction1.Up;
console.log(dir);
