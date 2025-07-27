"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function auth(constractor) {
    console.log(constractor);
    return class extends constractor {
        constructor() {
            super(...arguments);
            this.auth = false;
        }
    };
}
function authFactory(value) {
    return function auth(constractor) {
        console.log(constractor);
        return class extends constractor {
            constructor() {
                super(...arguments);
                this.auth = value;
            }
        };
    };
}
function changable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target, propertyKey);
        console.log(target[propertyKey]);
        descriptor.writable = false;
    };
}
let User = class User {
    constructor(message) {
        this.message = message;
        this.name = 'fatemeh hashemi';
    }
    getName() {
        return this.name;
    }
};
__decorate([
    changable(false)
], User.prototype, "getName", null);
User = __decorate([
    authFactory(true)
], User);
let user = new User('hello');
console.log(user);
// console.log(user.name);
console.log(user.getName());
user.getName = () => 'fatemeh'; //error in console because it is writable and can not change
console.log(user.getName());
