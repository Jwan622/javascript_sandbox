var gameController = {
  scores: [20,34,55,46,77],
  avgScore: null,
  players: [
    {name: "Tommy", playerID:987, age:23},
    {name: "Pau", playerID:87, age: 33}
  ]
}
var appController = {
  scores: [900, 845, 809, 950],
  avgScore: null,
  avg: function () {
    var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
      return prev + cur;
    });
    this.avgScore = sumOfScores/this.scores.length;
  }
}

//If we run the code below,​
// the gameController.avgScore property will be set to the average score from the appController object "scores" array​

// Don't run this code, for it is just for illustration; we want the appController.avgScore to remain null​
// gameController.avgScore = appController.avg()


appController.avg.apply(gameController, gameController.scores);
console.log(gameController.avgScore);
console.log(this.document);

function f1(){
  return this;
}

console.log(f1());
