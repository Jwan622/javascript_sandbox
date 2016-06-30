QUnit.test('max', function(assert) {
  assert.strictEqual(App.max(), -Infinity, 'No parameters');
  assert.strictEqual(App.max(3,2,1), 3, 'All positive numbers');
  assert.strictEqual(App.max(-10,5,3,99), 99, 'Positive and neg numbers');
  assert.strictEqual(App.max(-14, -22, -5), -5, 'All positive numbers');
});

QUnit.test('isOdd', function(assert) {
  assert.ok(App.isOdd(5), '5 is odd');
  assert.ok(!App.isOdd(6), '6 is not odd');
  assert.ok(!App.isOdd(0), "0 is not odd");
  assert.throws(function () {
    App.isOdd(null);
  },
    /cannot pass null/,
    'Passing null raises an Error');
  assert.throws(function () {
    App.isOdd([]);
  },
  new Error('The given argument is not an number'),
    'Passing an array raises an Error');
});

QUnit.test('sortObj', function(assert) {
  var timestamp = Date.now();

  var array = [{
    id: 1,
    timestamp: timestamp
  }, {
    id: 3,
    timestamp: timestamp + 1000
  }, {
    id: 11,
    timestamp: timestamp - 1000
  }];

  App.sortObj(array);

  assert.propEqual(array, [{
    id: 11,
    timestamp: timestamp - 1000
  }, {
    id: 1,
    timestamp: timestamp
  }, {
    id: 3,
    timestamp: timestamp + 1000
  }]);
  console.log(App.sortObj(array));
  assert.notPropEqual(App.sortObj(array), array, 'sortObj() does not return an array');
  assert.strictEqual(App.sortObj(array), undefined, 'sortObj() returns');
});

var App = {
   max: function() {
      var max = -Infinity;
      for (var i = 0; i < arguments.length; i++) {
         if (arguments[i] > max) {
            max = arguments[i];
         }
      }

      return max;
   },
   isOdd: function(number) {
     if (number === null) {
       throw "cannot pass null";
     }

     if (typeof number !== 'number') {
       throw new Error('The given argument is not an number');
     }

     return number % 2 !== 0;
   },
   sortObj: function(array) {
      array.sort(function(a, b) {
         var date1 = new Date(a.timestamp).getTime();
         var date2 = new Date(b.timestamp).getTime();

         if (date1 < date2) {
            return -1;
         } else if (date1 === date2) {
            return 0;
         } else {
            return 1;
         }
      });
   }
};
