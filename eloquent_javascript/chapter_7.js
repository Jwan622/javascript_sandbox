/*
try {
  withContext(5, function() {
    if (context < 10)
      throw new Error("Not enough context!");
  });
} catch (e) {
  console.log("Ignoring: " + e);
}
// → Ignoring: Error: Not enough context!

console.log(context);
// → null
*/

// The throw keyword is used to raise an exception. Catching one is done by wrapping a piece of code in a try
// block, followed by the keyword catch. When the code in the try block causes an exception to be raised,
// the catch block is evaluated. The variable name (in parentheses) after catch will be bound to the exception value.

//  If a function has to clean something up, the cleanup code should usually be put into a finally block.
// In this case, in the withContext method, we reset the variable context back to oldContext  which is why console.log(context)
// returns null which was the original value.

// we used the Error constructor to create our exception value. This is a standard JavaScript constructor that creates an object with a message property.
// A finally block means “No matter what happens, run this code after trying to run the code in the try block”.



/* What about non handled errors?

For programmer mistakes or problems that the program cannot possibly handle, just letting the error go through
is often okay. An unhandled exception is a reasonable way to signal a broken program, and the JavaScript console
will, on modern browsers, provide you with some information about which function calls were on the stack
when the problem occurred.

*/
