"use strict";
// function auth<T extends {new(...args:any[])}>(constractor:T){
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//     console.log(constractor);
//     return class extends constractor{
//         auth=false;
//     }
// }
// function authFactory(value:boolean){
//     return function auth<T extends {new(...args:any[])}>(constractor:T){
//     console.log(constractor);
//     return class extends constractor{
//         auth=value;
//     }
// }
// }
// function changable(value:boolean){
//     return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
//         console.log(target,propertyKey);
//         console.log(target[propertyKey]);
//         descriptor.writable=false;
//     }
// }
// @authFactory(true)
// class User{
//     private name='fatemeh hashemi'
//     constructor(public message:string){}
//     @changable(false)
//     getName(){
//         return this.name;
//     }
// }
// let user=new User('hello');
// console.log(user);
// // console.log(user.name);
// console.log(user.getName());
// user.getName=()=>'fatemeh' //error in console because it is writable and can not change
// console.log(user.getName());
//property decorator
function Emoji() {
    return function (target, key) {
        let value = target[key];
        Object.defineProperty(target, key, {
            get: () => value,
            set: (newValue) => {
                value = `🍨${newValue}🍨`;
            },
            configurable: true,
            enumerable: true
        });
    };
}
function log(target, methodKey, parameterIndex) {
    console.log(target, methodKey, parameterIndex);
}
class IceCream {
    constructor() {
        this.flavor = 'Vanilla';
    }
    //parameter decorator
    getInfo(name) { }
}
__decorate([
    Emoji()
], IceCream.prototype, "flavor", void 0);
__decorate([
    __param(0, log)
], IceCream.prototype, "getInfo", null);
let i = new IceCream();
console.log(i.flavor);
console.log(i.getInfo('fatemeh'));
