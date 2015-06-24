var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)


// this code below is broken
  //
  // var http = require('http');
  // var bl = require('bl');
  // var result = [];
  // var count = 0;
  //
  // for(var i=0;i<3;i++) {
  //     http.get(process.argv[2 + i], function(res){
  //         res.pipe(bl(function(err,data){
  //             if(err) return console.log(err.message);
  //             result[i]  = data.toString();
  //             count++;
  //             if(count == 3) {
  //                 for(var j=0;j<result.length;j++) {
  //                     console.log(result[j]);
  //                 }
  //             }
  //         }));
  //     });
  // }
