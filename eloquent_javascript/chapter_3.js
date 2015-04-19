var square = function(x) {
  return x * x;
};

console.log(square(12));

/* The function body must always be wrapped in braces, even when it consists
of only a single statement (as in the previous example).*/


//example of no parameter function below:
var makeNoise = function() {
  console.log("Pling!");
};

/* This is unlike Ruby:
A return statement determines the value the function returns. When control
comes across such a statement, it immediately jumps out of the current function and
gives the returned value to the code that called the function. The return keyword
without an expression after it will cause the function to return undefined.
Check out code below:
*/

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;   /* interesting that we're not using count actually in the equation */
  return result;
};

console.log(power(2, 10));



var oddeven = function(number) {
  if (number == 1)
    return "odd";
  else if (number == 0)
    return "even";
  else
    oddeven(number - 2);
}

console.log(oddeven(50))
