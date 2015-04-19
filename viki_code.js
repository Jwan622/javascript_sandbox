function nonNullObject(val) {
  return typeof val === "object" && val != null;
};

function propertiesCount(val) {
  var count = 0
  for (property in val) {
    count += 1;
  };
  return count;
};

function deepEqual(val1, val2) {
  if (nonNullObject(val1) && nonNullObject(val2)) {
    if (propertiesCount(val1) != propertiesCount(val2)) {
      return false;
    }
    else {
      var properties = [];
      for (key in val1) {
        if (key in val2) {
          properties.push(property);
        }
        else {
          return false;
        };
      };
      for (i = 0; i < properties.length; i++) {
        var property = properties[i]
        console.log(properties);
        console.log(property);
        console.log(val1[property]);
        console.log(val2[property]);
        return deepEqual(val1[property], val2[property]);
      };
    };
  }
  else {
    return val1 === val2;
  }
};

var string1 = "Bob"
var string2 = string1
console.log(deepEqual(string1, string2));
// → true
console.log(nonNullObject(1));
// → false
var obj = {here: {is: "an"}, object: 2};
console.log(nonNullObject(obj));
// → true
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// The above are the expected outputs. I'm getting all of them except the one on lines 50-51.
// That one's returning true.
// I have no idea what I'm doing.
