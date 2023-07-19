//mapinterface -as we will use this in many class
interface MapLocation {
  lat: number;
  log: number;
}

//0.decorator factory----------------------------------------------------------------------------------------------------------
function Addlocation(lat: number, log: number) {
  //1.decorator function in ts 5 in decorators we can pass the any type and the context:any also to that
  //this declarator can be applied to any class
  //decorator function any/functionConstructor instead of function
  // return function (Classconstructor: any, context: any) {
  //5.dynamically add the maplocation
  return function <T extends { new (...args: any[]): {} }>(Classconstructor: T) {
    //returning the decorator with the class from it is used
    return class extends Classconstructor {
      public mapLocation: MapLocation; //3. map should be initialised as it is passed ontop of the class and the along with the parent class properties the child class also will be initialised
      constructor(...args: any[]) {
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

@Addlocation(12, 12)
class Person {
  constructor(public name: string, public age: number /*4. statically add map to class, public maplocation: MapLocation*/) {}
}

const person: Person = new Person('jon', 32);
console.log(person);
//therfore by doing the above logic we changed the constructor function of the class and give the new constructor function
let x = 'y';
const y = 'x';
