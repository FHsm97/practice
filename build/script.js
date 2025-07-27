"use strict";
// function auth(param){
//     console.log(param);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// } log class User
function auth(constractor) {
    //process
    let auth = false;
    console.log(constractor);
    return class extends constractor {
        constructor() {
            super(...arguments);
            this.auth = auth;
        }
    };
}
let User = class User {
    constructor(message) {
        this.message = message;
        this.name = 'fatemeh hashemi';
    }
};
User = __decorate([
    auth
], User);
let user = new User('hello');
console.log(user);
function first(constractor) {
    console.log(constractor);
    return class extends constractor {
        constructor() {
            super(...arguments);
            this.property = 'first property';
        }
    };
}
function second(constractor) {
    console.log(constractor);
    return class extends constractor {
        constructor() {
            super(...arguments);
            this.property = 'second property';
        }
    };
}
let People = class People {
    constructor() {
        this.fName = "fatemeh";
    }
};
People = __decorate([
    first,
    second
], People);
let people = new People();
console.log(people);
