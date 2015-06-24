/* A promise is a method that eventually produces a value. It can be considered as the asynchronous counterpart
of a getter function. Its essence can be explained as:


promise.then(function(value) {
  // Do something with the 'value'
});



Promises can replace the asynchronous use of callbacks, and they provide several benefits over
them. They start to gain ground as more and more libraries and frameworks embrace them as
their primary way to handle asynchronicity. Ember.js is a great example of such a framework.


A promise can be in one of three states: pending, fulfilled, or rejected. When created,
the promise is in pending state. From here, it can either go to the fulfilled or rejected state.
We call this transition the resolution of the promise. The resolved state of a promise is its
final state, so once it is fulfilled or rejected, it stays there.



The way to create a promise in rsvp.js is via what is called a revealing constructor.
This type of constructor takes a single function parameter and immediately calls it with two arguments,
fulfill and reject, that can transition the promise to either the fulfilled or the rejected state:

var promise = new RSVP.Promise(function(fulfill, reject) {
  (...)
});


This JavaScript promises pattern is called a revealing constructor because the single function
argument reveals its capabilities to the constructor function, but ensures that consumers
of the promise cannot manipulate its state.

Consumers of the promise can react to its state changes by adding their handler through
the then method. It takes a fulfillment and a rejection handler function, both of which can be missing.

promise.then(onFulfilled, onRejected);


Depending on the result of the promise’s resolution process, either the onFulfilled
or the onRejected handler is called asynchronously.

Let’s see an example that shows in which order things get executed:
*/

function dieToss() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log('1');
var promise = new RSVP.Promise(function(fulfill, reject) {
  var n = dieToss();
  if (n === 6) {
    fulfill(n);
  } else {
    reject(n);
  }
  console.log('2');
});

promise.then(function(toss) {
  console.log('Yay, threw a ' + toss + '.');
}, function(toss) {
  console.log('Oh, noes, threw a ' + toss + '.');
});
console.log('3');


/* First, that the handlers we attached to the promise were indeed called after all other code
ran, asynchronously.

Second, that the fulfillment handler was called only when the promise was fulfilled,
with the value it was resolved with (in our case, the result of the dice toss).
The same holds true for the rejection handler.

*/


/* Chaining promises and trickling down

The specification requires that the then function (the handlers) must return a promise,
too, which enables chaining promises together, resulting in code that looks almost synchronous:

signupPayingUser
  .then(displayHoorayMessage)
  .then(queueWelcomeEmail)
  .then(queueHandwrittenPostcard)
  .then(redirectToThankYouPage)


Here, signupPayingUser returns a promise, and each function in the promise chain gets
called with the return value of the previous handler once it has completed.

**For all practical purposes, this serializes the calls without blocking the main execution thread.**

*/






/* another promise tutorial


JavaScript promises are similar in API to RSVP.js. Here's how you create a promise:


var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (everything turned out fine ) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});


The promise constructor takes one argument, a callback with two parameters, resolve and
reject. Do something within the callback, perhaps async, then call resolve if
everything worked, otherwise call reject.

Here's how you use that promise:

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});


"then" takes two arguments, a callback for a success case, and another for the
failure case. Both are optional, so you can add a callback for the success or failure case only.

*/

// this is more another async example, not a promise:

var id = 1;
function getId(callback) {
  // Generate new id by counting id up
  var myId = id++;

  // Asynchronous result
  window.setTimeout(function() {

      // After random time run callback with id
      callback(myId);

  }, 1000 * Math.random());
}

function outputValue(value) {
    // Output value to console
    console.log("Your id: ", value);
}

getId(outputValue);
getId(outputValue);


// this is the above example as a promise

var id = 1;
function getId() {

    // Create promise object
    var promise = new core.event.Promise();

    // Generate new id by counting id up
    var myId = id++;

    // Asynchronous result
    window.setTimeout(function() {

        // After random time
        // fulfill promise with id
        promise.fulfill(myId);

    }, 1000 * Math.random());

    // Return promise to caller
    return promise;

}

function outputValue(value) {
    // Output value to console
    console.log("Your id: ", value);
}

getId().then(outputValue);
getId().then(outputValue);


// The above promise code has no advantage over the first one. Now lets expand the code a bit.
// Here is a promise code that is actually useful since it handles errors:

var id = 1;
function getId() {

    // Create promise object
    var promise = new core.event.Promise();

    // Generate new id by counting id up
    var myId = id++;

    // Asynchronous result
    window.setTimeout(function() {

        // So this is a simulation of failure;
        // If a random value is below or
        // equal 0.5 I take it as an failure.
        if (Math.random() > 0.5) {

            // After random time
            // fulfill promise with id
            promise.fulfill(myId);

        } else {

            // After random time reject promise
            promise.reject("Service failure");

        }

    }, 1000 * Math.random());

    // Return promise to caller
    return promise;

}

function outputValue(value) {
    // Output value to console
    console.log("Your id: ", value);
}

function errorHandler(reason) {
    // Output error reason to console
    console.log("Error happened: ", reason);
}

getId().then(outputValue, errorHandler);
getId().then(outputValue, errorHandler);


/* what is the above code doing. look at the function call getId().then(outputValue) first. You call getId() which
   calls setTimeout. It then has a random generator. If it's greater than 0.5 (fulfilled), then it runs outputValue
   which logs the myId value to console.
