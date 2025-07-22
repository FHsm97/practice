"use strict";
// let firstname='fatemeh';
// // firstname=12; error
// let lastname;
// lastname='hashemi';
// console.log(lastname);
// lastname=55;
// console.log(lastname);
// let age:number=25;
// let student:boolean=false;
// // let height:string=162; error
// let list=[1,2,3];
// // list=['1','2','3'] error
// console.log(list);
// let list2:string[]=['1','2','3']
// let list3:any[]=['fatemeh',25,true]
// list3[0]=254
// let tuple:[string,number]=['hashemi',654]
// // let tuple2:[string,number]=['hashemi',654,10] error
// let num:number|null=22
// num=null
// let fname:string|undefined='fatemeh'
// fname=getString();
// function getString() {
//     return undefined;
// }
// function log(message:string):void {
//     // return message; error
//     console.log(message);
// }
// log('hello world!')
// //enum
// enum Direction{
//     UP,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Right);
// console.log(Direction);
// enum Direction1{
//     Up=20,
//     Down=30,
//     Left=40,
//     Right=50
// }
// console.log(Direction1);
// // console.log(Direction1.Left=100); error enums=>just readOnly
// let dir:Direction1=Direction1.Up;
// console.log(dir);
// function sum(x:number,y:number):number {
//     return x+y;
// }
// console.log(sum(2,5));
// let jam=(a:number,b:number):number=>a+b
// console.log(jam(10,12));
// let sum2:(i:number,j:number)=>number //not arrow function,this is type function
// // sum2=function(i:string,j:string){
// //     return i+j;
// // } error=>parameter type not match
// sum2=function(i:number,j:number){
//     return i+j;
// }
// let sum3:(c:number,d:number)=>number=(c:number,d:number)=>c+d
// //defaualt parameter
// let sum4=(x:number=2,y:number=5)=>x+y
// console.log(sum4(10,15));
// console.log(sum4());
// //optional parameter
// let sum5=(x:number=2,y?:number)=>{
//     if(y)
//         return x+y;
//     return x;
// }
// console.log(sum5());//return default x=2
// console.log(sum5(6));//return x=6
// console.log(sum5(5,7));//return x+y=12
// //rest operator
// let sum6=(x:number,...numbers:number[])=>{
//     console.log(x,numbers);
// }
// sum6(2,3,5,7,10,12)
// //object as types
// let people:object={};
// let person:{
//     fullname:string,
//     age:(num:number)=>string
// }={
//     fullname:'fatemeh hashemi',
//     age:(num:number)=>{
//         return`age:${num}`
//     }
// }
// type MyObject={
//     fname:string,
//     lname:string,
//     age:(num:number)=>string
// }
// let person2:MyObject={
//     fname:'fatemeh',
//     lname:'hashemi',
//     age:(num:number)=>{
//         return`age:${num}`
//     }
// }
// type MyFunc = (num1: number, num2: number) => number;
// let minus:MyFunc=function(num1,num2){
//     return num1-num2
// };
// //class properties
class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    sayHello() {
        console.log('hello');
    }
}
class IranKhodro extends Car {
    run() {
        console.log(this.year);
        // console.log(this.model); error =>model is private
    }
}
let car1 = new Car('206', 2012, 'red');
console.log(car1);
// console.log(car1.model); error=>model is private
// console.log(car1.color); error=>color is protected and just use it in class and extends class
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    } //second way for constructor
}
