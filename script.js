// THIS keyword

// in objects - it means the object name itself
console.log(this);
let person = {
  firstName: "tushar",
  lastName: "khan",
  age: 19,
  address: "dhaka, bangladesh",
  show() {
    return this;
  },
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.table(person.show());
console.log(person.fullName());
//the above way is the implicit way of binding the object with this.

//now let us see the explicit bonding. it means we can specify which object to chose as the 'this' keyword.

let person1 = {
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person1.fullName());
//notice it will show undefined as the person1 object does not contain any firstName and lastName. we can bring the firstName and lastName from the previously declared object 'person' by using call(object-name) method.

console.log(person1.fullName.call(person));
//now notice that it is using 'person' object as the 'this' keyword.
//so we have learned the explicit way of binding the 'this' keyword with an object.
