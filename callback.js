function genericPoemMaker(name, gender) {
  console.log(name + " is finer than fine wine.");
  console.log("Altruistic and noble for the modern time.");
  console.log("Always admirably adorned with the latest style.");
  console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

// all the getUserINput function is doing is composing a fullName and calling
// a callback which is passed to getUserInput. It has functionality that is common to
// // each of the methods that are passed as the callback.
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;
    // Make sure the callback is a function​
    if (typeof callback === "function") {
    // Execute the callback function and pass the parameters to it​
    callback(fullName, gender);
    }
}

getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);
function greetUser(customerName, sex) {
  var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + customerName);
}
getUserInput("Bill", "Gates", "Man", greetUser);
