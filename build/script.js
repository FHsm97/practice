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
