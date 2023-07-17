console.log(`hi im from main js`);
//method->object
//function->wind0w
//---------------------this inside the obj
const book = {
  title: 'book',
  read() {
    console.log(this);
  }
};
book.next = function () {
  console.log(this); //object
};
// book.next();
const ann = function () {
  console.log(this); //window
};
// ann(); //window
//this ----------------------werird behavoiur

const book1 = {
  title: 'the book',
  author: ['tom', 'kelyy', 'josh'],
  print() {
    console.log(this); //obj
    this.author /*this-->obj */
      .forEach(function (author) {
        console.log(this.title /*this-->global */, '-', author);
        console.log('>>>>>', this); /*this-->global */
      }, this /*this-->foreach author fn passing this as second arg */);
  }
};
// book1.print();
//this inside the function is function scpoped and denaotes the winddow obj so we bind that function to the obj by adding another this inside the function
//in arrow fn this denotes the parent obj/mdthod and the parent method print is binded with the author obj by using this inside the print fn
const book2 = {
  title: 'the book',
  author: ['tom', 'kelyy', 'josh'],
  print() {
    console.log('>>>>>', this);
    this.author.forEach(author => {
      console.log(this.title, '-', author);
      console.log(this);
    });
  }
};
// book2.print();
//-------------------------------------------------------------------------------
//constructor function - understanding the constructor function in js helps in prototypal inheritance
//main pupose of the consturctor fn  is to genrate obj, constuctor fn in class are like the function constucotor in js. and the super method is to call the parent and bind the parent parameters
class User {
  constructor(name, user) {
    this.name = name;
    this.user = user;
    this.point = 0;
    this.logoutpoint = 0;
  }

  login() {
    this.addpoint();
    console.log('userlogin-name>>>>>>>', this.name);
  }
  logout() {
    this.logoutpoints();
    console.log('userlogout-name>>>>>>>', this.name);
  }
  addpoint() {
    this.point = this.point + 1;
    console.log(this.name, ' - total no of login>>>>', this.point);
  }
  logoutpoints() {
    this.logoutpoint = this.logoutpoint + 1;
    console.log(this.name, 'total no of login>>>>', this.logoutpoint);
  }
}

// const user1 = new User('bhumesh', 'bhuemsh@gamail.com');
// console.log(user1);
// user1.login();
// user1.logout();
// the constructor fn sets all the property of the class including the methods of the parent class to the prototype obj of the child obj when the child class is created. so the child class inherit the properties from the parent class through __proto__ and store it in the prototype of the obj

const User1 = function (name, email) {
  this.name = name;
  this.email = email;
  // this.login = function () {
  //   console.log(this.name);
  // };
};
User1.prototype.login = function () {
  console.log(this.name);
};
const user2 = new User1('bhumesh', 'bhuemsh@gamail.com');
console.log(user2);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//property descriptors
/*four types of property descriptors
1.value- has value or not if value display it either it is in number or value
2.configurable- property can be configured or not
3.enumerable - property can be loop through or not
4.wiritable - property can be writtern or not*/
const book3 = {
  author: 'bhumesh',
  title: 'the book',
  pages: 300
}; //obj literal

console.log(Object.getOwnPropertyDescriptors(book3));

//define property method-------------------------------------------------------------------------------------------------
const book4 = new Object();

Object.defineProperty(book4, 'title', {
  value: 'the book',
  configurable: true,
  writable: false, //here we set the title writable  property to false so the title can't be overwrittern and if we set the property to true it is overridden
  enumerable: true
});

console.log(book4);

book4.title = 'Book';

console.log(book4);

Object.defineProperty(book4, 'author', { value: true, writable: true, configurable: true, enumerable: true });
book4.author = 'mark';
console.log(book4);
