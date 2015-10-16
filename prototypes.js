// part 1

// function Greeting () {
//   this.greet = "Hello world"
// }
//
// var greeter = new Greeting();
// greeter.name = "Jeff"
// greeter.lastName = "Wan"
//
// for (var attribute in greeter) {
//   console.log(attribute)
// }
//
// // So at thie point, there are 3 attributes on greeter, including one from constructor.
//
// // Let's try to delete own properties and inherited ones.
//
// console.log(greeter.hasOwnProperty("greet"))
// delete(greeter.greet);
// console.log(greeter.greet)
//
// var newGreeter = new Greeting();
// console.log(newGreeter.greet)
//
// Greeting.prototype.newGreet = "Hi there!"
// console.log(newGreeter.hasOwnProperty("newGreet"))
// console.log(newGreeter.newGreet)

// up to here, everything makes sense.








// Let's look more into prototypes:
// Part 2

// function PrintStuff(docs) {
//   this.docs = docs;
// }
//
// PrintStuff.prototype.print = function() {
//   console.log(this.docs)
// }
//
// var printer = new PrintStuff("Hello World");
// printer.print()


// more stuff on prototypes:
// Part 3

// function Plant() {
//   this.country = "Mexico"
//   this.isOrganic = true;
// }

// Add a  method to the Plant prototype property
// Plant.prototype.showNameAndColor = function() {
//   console.log("I am a" +this.name + "and my color is" + this.color)
// }
//
// //Let's add another method to Plant Prototype property
// Plant.prototype.amIOrganic = function() {
//   if (this.isOrganic)
//   console.log("I am Organic Baby");
// }

// function Fruit(fName, fColor) {
//   this.name = fName;
//   this.color = fColor;
// }

// In this next line, we set the fruit's prototype to Plant's constructor, this inheriting all of Plant.prototype methods
// and properties
// console.log(new Plant());
// Fruit.prototype = new Plant();
//
// var abanana = new Fruit("Banana", "Yellow")
// console.log(abanana.constructor)
// console.log(abanana.name)

// uses the showNameAndColor method from the fruit object prototype which is plant prototype
// console.log(abanana.showNameAndColor())
// console.log(Fruit.prototype)








// Part 5

// The constructor

// The constructor property does not cause any particular effects in your program, except
// that you can look at it to see which function was used in conjunction with the operator
// new to create your object. If you typed new Bar() it will be Bar and you typed new
// Fooit will be Foo.


// The prototype

/* The prototype property is used for lookup in case the object in question does not
have the property asked for. If you write x.attr, JavaScript will try to find attr
among x's attributes. If it cant find it, it will look in x.__proto__. If it's
not there either, it will look in x.__proto__.__proto__ and so on as long as __proto__ is defined.

So what is __proto__and what has it got to do with prototype? Shortly put, prototype
is for "types" while __proto__ is for "instances". (I say that with quotation marks
because there's not really any difference between types and instances). When you
write x = new MyType(), what happens (among other things) is that x.__proto___
is set to MyType.prototype.
*/

function Greeting () {
  this.greet = "Hello world"
}
Greeting.prototype.language = "English"
var greeter = new Greeting();

console.log(greeter.__proto__)
