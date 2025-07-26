"use strict";
// let firstname='fatemeh';
// // firstname=12; error
class Fatemeh {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Zahra {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Akram {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
let user = new Zahra('zahra', 'hashemi', 30);
console.log(user.fullName());
