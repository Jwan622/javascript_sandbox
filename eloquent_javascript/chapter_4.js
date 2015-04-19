//Chapter 2
//  Variable names can be any word that isn’t reserved as a keyword (such as var). They
//  may not include spaces. Digits can also be part of variable names—catch22 is a valid name, for
// example—but the name must not start with a digit. A variable name cannot include punctuation,
// except for the characters $ and _.


//Chapter 4

var doh = "Doh"
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase));

// so properties in javascript are like attributes in ruby, methods exist like toUpperCase, and objects are collections of
// properties. Values of the type objects are collections of properties... use curly brace notation for javascript. We
// can access these properties in an object using dot notation. We can also add properties to an object too!

/*Adding new properties to an object:

here is a sample object:
var day1 = {
  squirrel: false
  events: ["work", "touched tree", "pizza"]
}

I can add to the above object like this:
day1.wolf = false

It is possible to assign a value to a property expression with the = operator.
This will replace the property’s value if it already existed or create a new property on the object if it didn’t.

*/
/* On why you access elements of an array using []: The elements in an array are
stored in properties. Because the names of these properties are numbers (not a
valid varialbe name. numbers are okay in variable names unless they begin
with a number) and we often need to get their name from a variable (it needs to
be evaluated), we have to use the bracket syntax to access them. (Remember, you
can access properties from a value in javascript only if the property name is
a valid variable name) */


/* Unvalid property names:
Properties whose names are not valid variable names or valid numbers have to be quoted.

var descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

The above "touched tree" property is not valid because it has a space.
*/

console.log(doh.length)   //valid property name so we use dot notation
console.log(doh["length"]) //shoud also be a valid property name but you can use bracket notation.


/* Undefined:
//Reading a property that doesn’t exist will produce the value undefined. Undefined methods I think also returned undefined.
// Alex Jensen of Turing says this will be annoying
*/



// below is code for Jacques journal:
var journal = [
{events: ["work", "touched tree", "pizza", "running", "television"]
squirrel: false}
{events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed tree"]
squirrel: false}
]



/* object mutability and other types of values:
objects CAN be modified. numbers, strings, and Booleans, are all immutable—it is
impossible to change an existing value of those types. You can combine them and
derive new values from them, but when you take a specific string value, that value
will always remain the same. The text inside it cannot be changed. If you have
reference to a string that contains "cat", it is not possible for other code to
change a character in that string to make it spell "rat".
*/



/* objects and equivalence in Javascript using == :
object1 does not == object2 even if object1 and object2 have the same values
*/



/* n01. first measurement is pizza, second is squirrelness.
later on in chapter 4, the indices of the array are a two bit binary number where the leftmost
number is squirrelness. They change this on you. So in the array [76, 9, 4, 1], the indices are
[00, 01, 10, 11]. 10 would correspond to 4. the 1 is the squirrelness which is true, and the 0 is the
pizzaness which is false. So 4 times, jacques turned into a squirrel but did not have pizza.

This is the formula that would compute correlation from an array:
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1])    /
  Math.sqrt((table[2] + table[3])
            (table[0] + table[1])
            (table[1] + table[3])
            (table[0] + table[2]))
}

console.log(phi(76, 9, 4, 1));



Here is the code that creates a table that refers to an event and squirrelness. This is how to calculate the
table from a journal (an array of objects and properties). Objects are pretty much hashes in Javascript.

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

The above function looks at each entry, which is each object in the array Journal, and looks
for the event in the events. It returns a boolean. Basically, if the event exists in the events section of the object,
the function returns true. IF the event like pizza is absent, it returns false.

next function:
function tableFor(event, journal) {
  var table = [0,0,0,0]
  for (var = i; i< journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry))
      index += 1;
    if (entry.squirrel)
      index += 2;
    table[index] += 1
  }
  return table
}

So the above function does this. If the event does not exist in object, the if statements are not hit at all.
So index would = 0 and table[0] is added by 1. This makes sense!
}


So how do we store the correlations of each event with squirrelness? type 1:
1) [
{name: pizza,
value: 0.69},
{name: breakfast,
value: 0.35}
]

We could use an array of objects with name and value properties. OR

2) {
pizza : 0.69,
breakfast: 0.35
}

Or just one big object with the event as the property and the correlation as the value. Sick. This is a smaller
data structure.

In short, Objects can we used as maps. You can go from values in one domain (events) to values in another domain (coefficients)


The below code is how to loop through and print out all the events/coefficient pairs in the object.

for (var event in map)
  console.log("The correlation for ' " + event + "' is " + map[event]);



So lastly, this function will store the correlations and events in an object called "phis". For every entry in the journal, we
store the events array in a variable called "events". var events is an array. Within that array, we look at each event and store it.
in a variable called "event". "Event" is something like pizza. If event is not in the object phis
, then we add the event as a property in the object phis, we then calculate the correlation after calculating
the correlation array. We now have a complete phi object with the correlations for every property that we care about.
For each event like "pizza" in the events property of every object.

*/
function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
      }
  }
  return phis;
}


/*
So the above code is a loop within a loop. We look at the events array in the entire JOURNAL. So "var events" reps an array during each loop.
Then within each events array, we look at "var event" which reps each element in the events array. We look at the individual event
and see if it exists in phi. If not, we add the event property to the phis object and we calculate
the phi/correlation for it. It's super awesome.


*/



/* higher order functions:
Functions that operate on other functions, either by taking them as arguments or by
returning them, are called higher-order functions.



Question on higher-order functions vs closures:
Functions that operate on other functions, either by taking them as arguments
or by returning them, are called higher-order functions.

This is a closure too?
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
