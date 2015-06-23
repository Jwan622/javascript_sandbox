var mymodules = require('./modules.js');
var dir = process.argv[2]
var filter = process.argv[3]

mymodules(dir, filter, function(err, data){
  if (err) {
    console.log(err)
  }
  
  data.forEach(function(file){
    console.log(file);
  });
});
