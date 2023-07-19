"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//0.decorator factory----------------------------------------------------------------------------------------------------------
function Addlocation(lat, log) {
    //1.decorator function in ts 5 in decorators we can pass the any type and the context:any also to that
    //this declarator can be applied to any class
    //decorator function any/functionConstructor instead of function
    // return function (Classconstructor: any, context: any) {
    //5.dynamically add the maplocation
    return function (Classconstructor) {
        //returning the decorator with the class from it is used
        return class extends Classconstructor {
            constructor(...args) {
                //2.we dont want to loose all the properties intantiated in the Person class as we pass this to all the class.
                //so we use the super to inherit the properties of the parent class
                //super intantiate all the properties of the parent class
                //3.super must be  called before accessing this class of the constructor
                super(...args);
                this.mapLocation = { lat, log };
            }
        };
    };
}
let Person = class Person {
    constructor(name, age /*4. statically add map to class, public maplocation: MapLocation*/) {
        this.name = name;
        this.age = age;
    }
};
Person = __decorate([
    Addlocation(12, 12),
    __metadata("design:paramtypes", [String, Number])
], Person);
const person = new Person('jon', 32);
console.log(person);
//therfore by doing the above logic we changed the constructor function of the class and give the new constructor function
let x = 'y';
const y = 'x';
//# sourceMappingURL=app.js.map