/*
(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});

console.log(weekDay.name(weekDay.number("Saturday")));
// → Saturday
*/

/* in this function, this.weekday = {} is passes as an argument to the anonymous function expression. BTW, by wrapping
the function in parenthesis, it is a trick to force the function to be interpreted as an expression which can then be called.
