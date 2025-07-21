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
function sum(x, y) {
    return x + y;
}
console.log(sum(2, 5));
let jam = (a, b) => a + b;
console.log(jam(10, 12));
let sum2; //not arrow function,this is type function
// sum2=function(i:string,j:string){
//     return i+j;
// } error=>parameter type not match
sum2 = function (i, j) {
    return i + j;
};
let sum3 = (c, d) => c + d;
//defaualt parameter
let sum4 = (x = 2, y = 5) => x + y;
console.log(sum4(10, 15));
console.log(sum4());
//optional parameter
let sum5 = (x = 2, y) => {
    if (y)
        return x + y;
    return x;
};
console.log(sum5()); //return default x=2
console.log(sum5(6)); //return x=6
console.log(sum5(5, 7)); //return x+y=12
//rest operator
let sum6 = (x, ...numbers) => {
    console.log(x, numbers);
};
sum6(2, 3, 5, 7, 10, 12);
