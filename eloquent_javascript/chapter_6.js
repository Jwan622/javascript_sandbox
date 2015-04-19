// objects

/*
This story, like most programming stories, starts with the problem of complexity.
 One philosophy is that complexity can be made manageable by separating it into
small compartments that are isolated from each other. These compartments have
ended up with the name objects.

The idea is that the interface is relatively simple and all the complex things
 going on inside the object can be ignored when working with it.

Suddenly, there was a large tribe of people declaring that objects were the
right way to program—and that anything that did not involve objects was
outdated nonsense.


So let's look at some definitions of objects and properties and methods

Methods are simply properties that hold function values.
This is a simple method:

*/

var rabbit = {};
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'




/* functions, this, and when functions are called as methods:

When a function is called as a method—looked up as a property and immediately called,
as in object.method()—the special variable this in its body will point to the
object that it was called on.

"this" is kind of like self.
*/


/*

A more convenient way to create objects that derive from some shared prototype
is to use a constructor. In JavaScript, calling a function with the new keyword
in front of it causes it to be treated as a constructor.

In addition to their set of properties, almost all objects also have a prototype.
A prototype is another object that is used as a fallback source of properties.

Prototypes are kind of like classes and superclasses.

The Object.getPrototypeOf function returns the prototype of an object.

The prototype of {} is Object.prototype.
Object.prototype has no prototype.... Object.prototype is the great ancestral prototype, the entity
behind all objects.

You can use Object.create to create an object with a specific prototype. In the code below,
The “proto” rabbit acts as a container for the properties that are shared by all rabbits.
An individual rabbit object, like the killer rabbit, contains properties that apply only
to itself—in this case its type—and derives shared properties from its prototype.

*/

 var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
  }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

/*
In the above code example, protoRabbit is the prototype of killerRabbit. KillerRabbit inherits the
properties of protoRabbit.
Remember: A prototype is another object that is used as a fallback source of properties or methods (properties that
return a function.)
*/

var empty = {};
console.log(empty.toString);

/*
What is the prototype of that empty object? It is Object.prototype.
*/


// A more convenient way to create objects that derive from some shared prototype is to use a constructor
// simple constructor:

function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);



/* interesting enough, you can create extra methods for rabbits already created from the
constructor in this way:
*/

Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};
blackRabbit.speak("Doom...");

/*
It is important to note the distinction between the way a prototype is associated
with a constructor (through its prototype property) and the way objects have a prototype
(which can be retrieved with Object.getPrototypeOf).

The above means that if you do Rabbit.prototype.speak = function(line) ...
The Rabbit prototype is the fallback object with properties. It is associated with its constructor
through the prototype property.
*/

/* Constructors automatically get a property named prototype which by default holds a plain empty object that derives
from Object.prototype

/* Here's how to override prototype properties:



Overriding properties that exist in a prototype is often a useful thing to do.
As the rabbit teeth example shows, it can be used to express exceptional properties
in instances of a more generic class of objects, while letting the nonexceptional
objects simply take a standard value from their prototype. Here's how to do it:

*/

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
