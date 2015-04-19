/* Big takeaways:
1) Because the inner function lives inside the environment of the outer one,
it can use n. The bodies of such inner functions can access the variables around them.
An important difference is that variables declared inside inner functions do not end up
in the environment of the outer function.

2) Functions that operate on other functions, either by taking them as arguments or by
returning them, are called higher-order functions. If you have already accepted the fact
that functions are regular values, there is nothing particularly remarkable about the fact
that such functions exist




function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

noisy(Boolean)(0);

the above function is an example of a closure or higher order function : a function that calls other functions? */




var todoList = []
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}

function urgentlyRememberTo(task) {
  todolist.unshift(task)
}

rememberTo("apple");
rememberTo("orange")
whatIsNext();
console.log(todoList)





/*
about expressing programs in smaller concepts:
It is more likely to be correct because the solution is expressed in a vocabulary
that corresponds to the problem being solved. Summing a range of numbers isn’t about
loops and counters. It is about ranges and sums.


Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

Thus, you might fall into the pattern of the first recipe—work out the precise steps the computer
has to perform, one by one, blind to the higher-level concepts that they express.

It has to become second nature, for a programmer, to notice when a concept is begging
 to be abstracted into a new word.


For example:
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

abstraction:
function logEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}

we can then abstract the action by passing it as an argument:
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

The above method can be called with an action:
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);


We could also take the forEach function and instead of passing in a predefined function,
we could just create a function value on the spot instead. The variable "number" below is the name
for the current element (number)

*/
var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum)

/*

Functions that operate on other functions, either by taking them as arguments
or by returning them, are called higher-order functions.

For example, you can have functions that create new functions.

function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

lexical scoping:
Because the inner function lives inside the environment of the outer one, it can use n.
The bodies of such inner functions can access the variables around them.

*/



/* JSON is similar to JavaScript’s way of writing arrays and objects, with a few
 restrictions. All property names have to be surrounded by double quotes, and
 only simple data expressions are allowed—no function calls, variables, or anything
 that involves actual computation. Comments are not allowed in JSON


 JavaScript gives us functions, JSON.stringify and JSON.parse, that convert data
  from and to this format. The first takes a JavaScript value and returns a
  JSON-encoded string. The second takes such a string and converts it to the value it encodes.

 var string = JSON.stringify({name: "X", born: 1980});
 console.log(string);
 // → {"name":"X","born":1980}
 console.log(JSON.parse(string).born);
 // → 1980



/* reduce method for ancestors middle of chapter
Another common pattern of computation on arrays is computing a single value from them. */

console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}));

/* so the above code is interesting. There is earlier code that shows reduce to be a higher
order function. The return values of this above function (cur and min) replace the min inside
the function(min, cur). Whatever the above function returns, it replaces min. cur is the iterating
array that reduce iterates through. The reduce function in javascrip is defined as: */

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a * b;
}, 0));

/* the above made sense to me. The standard array method reduce, which of course
 corresponds to this function, has an added convenience. If your array contains
 at least one element, you are allowed to leave off the start argument. */


// Reduce takes time to understand, but basically look at how function(a,b) returns a value that
// then gets plugged back into the second function call. We iterate through the array with the reduce method until
// we've comapred all values in the array. We then return a value that the secondary function returns on the last iteration.


/*
To use reduce to find my most ancient known ancestor, we can write something like this:
*/

console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}));

/* The above code could also be written as */

var min = ancestry[0];
for (var = 1; i < ancestry.length; i++) {
  var cur = ancestry[i];
  if (cur.born < min.born)
    min = cur;
}
console.log(min);



/* Higher-order functions start to shine when you need to compose functions.
*/


/* cost of abstraction:
Abstractions add layers between the raw things the computer is doing and the
concepts we are working with and thus cause the machine to perform more work.
But function calls in JavaScript are costly compared to simple loop bodies.

*/

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
sum += number;
});
console.log(sum);


/* So the above function(number) is a call back. It's the ruby equivalent of a block.
"number" is just a block variable


Being able to pass function values to other functions is not just a gimmick but
 a deeply useful aspect of JavaScript. It allows us to write computations with
 “gaps” in them as functions and have the code that calls these functions fill
in those gaps by providing function values that describe the missing computations.


Arrays provide a number of useful higher-order methods—forEach to do something
with each element in an array, filter to build a new array with some elements
filtered out, map to build a new array where each element has been put through
a function, and reduce to combine all an array’s elements into a single value.
*/
