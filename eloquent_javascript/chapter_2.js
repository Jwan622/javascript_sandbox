/* If an expression corresponds to a sentence fragment,
a JavaScript statement corresponds to a full sentence in a human language. A program is simply a list of statements.*/

/* so expression is within a statement. Statements end with : */

/* A statement stands on its own and amounts to something only if it affects the world.
It could display something on the screen—that counts as changing the world—or it
could change the internal state of the machine in a way that will affect the statements that come
after it. These changes are called side effects. */


var num = 10
if (num < 10)
  console.log("small");
else if (num <100)
  console.log("medium");
else
  console.log("large");


/*
When to use curly brackets:
Whenever we need to execute multiple statements inside a loop, we wrap them in curly
braces ({ and }). Braces do for statements what parentheses do for expressions: they
group them together, making them count as a single statement. A sequence of statements
wrapped in braces is called a block.

Many JavaScript programmers wrap every single loop or if body in braces.
They do this both for the sake of consistency and to avoid having to add or remove
braces when changing the number of statements in the body later. In this book,
I will write most single-statement bodies without braces, since I value brevity.
*/
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}


/* new code */

console.log(result)
for (var current =  20; ; current++) {
  if (current % 200 == 0)
    break;
}

console.log(current)


//exercise 1//

for (number_pound = "#"; number_pound.length <= 7; number_pound += "#") {
  console.log(number_pound);
}

var number_pound = "#"
while (number_pound.length <= 7) {
  console.log(number_pound);
  number_pound += "#";
}



//exercise chess board//
var size = 8;
var board = "";

for (var line = 0; line < size; line++) {
  for (var column = 0; column < size; column++) {
    if ((line+column) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n"
}

// NICE!

console.log(board)
// think of outside loop as a kind of a line counter
// line variable is local. The inside loop as acccess to the line variable but
// the outside loop does not have access to the column variable.
