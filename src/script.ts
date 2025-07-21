let firstname='fatemeh';
// firstname=12; error

let lastname;

lastname='hashemi';
console.log(lastname);

lastname=55;
console.log(lastname);

let age:number=25;

let student:boolean=false;

// let height:string=162; error


let list=[1,2,3];

// list=['1','2','3'] error

console.log(list);


let list2:string[]=['1','2','3']

let list3:any[]=['fatemeh',25,true]
list3[0]=254


let tuple:[string,number]=['hashemi',654]
// let tuple2:[string,number]=['hashemi',654,10] error

let num:number|null=22
num=null


let fname:string|undefined='fatemeh'
fname=getString();

function getString() {

    return undefined;
    
}


function log(message:string):void {
    // return message; error
    console.log(message);
    
}
log('hello world!')

//enum
enum Direction{
    UP,
    Down,
    Left,
    Right
}
console.log(Direction.Right);
console.log(Direction);

enum Direction1{
    Up=20,
    Down=30,
    Left=40,
    Right=50
}
console.log(Direction1);
// console.log(Direction1.Left=100); error enums=>just readOnly
let dir:Direction1=Direction1.Up;
console.log(dir);


