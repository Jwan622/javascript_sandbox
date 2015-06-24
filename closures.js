var funcs = {};
for (var i = 0; i < 3; i++) {          // let's create 3 functions
  (function(j) {
    funcs[j] = function() {            // and store them in funcs
      console.log("My value: " + j); // each should log its value.
    };
  })(i);

  /* this function is lazy... it doesn't run immediately. This anon function is a closure
  if there are any variables inside of this closure, it will store the context of the function that it's being defined.
  All this function keeps track of is that it refers to i... it does not store the actual value of what i was before the function was
  defined and stored in funcs[i]. All we're doing here is defining the function on line 4, not calling it. When it stores it, it only
  stores the fact that i being referred to... it doesn't store what it is. It stores the surrounding context and any variables that
  the function refers to.

  down below when we call the function. It rehydrates the context that is stored. All 3 functions that are stored in memory refer to
  the same i. The 3 functions in memory have the same exact reference to i. By the time they are called, the value of i has changed (after the loop has completed, i is 3)
  Since i is three (the increment function is run 3 times),

  Why? The function doesn't know what i is until you run the function. It only has a pointer to the variable. It does not store what i is when
  you define the function. It just stores a pointer to what is which only has value when you call the function and access that
  variable. By the time you access the variable, i is 3.

  A closure doesn't close over a value, all it does is that it knows what the context -- the list of things you can reference like
  variables, functions. So, it has a list of variables and functions kept in memory but it doesn't the value of those things.
  The context knows the value of these variables... but the function... the closure doesn't close over values or store these values.
  When you call the closure, that's when it goes to the context and looks up those values.

  interestingly enough, any variable to define inside this loop will bleed out. Var i here is actually a global variable because
  there isn't a function wrapping around it. this variable is global.

  When you create a function, you aren't creating an isolated scope or a new variable scop that is separate from everything else.
  If that were the case, you wouldn't be able to call i. All you're doing is creating a scope that is inheriting from the outer scope.
  */
}

for (var j = 0; j < 3; j++) {
  funcs[j]();                        // and now let's run each one to see
}
console.log(funcs)
