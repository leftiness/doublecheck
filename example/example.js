// you would probably npm install doublecheck
var dc = require('../index.js')
var Dog = require('./models/Dog.js');
var DogHouse = require('./models/DogHouse.js');

// construct an object using doublecheck (primitives don't work yet)
var jeff = new (dc(Dog, new String('jeff')));

// true
console.log(jeff instanceof Dog);

// you can use inherited methods
jeff.bark();

var house = new (dc(DogHouse, jeff, new Number(1)));

// you can access instance variables
console.log(house.size);

// this is going to fail at runtime
dc(DogHouse, jeff, new String('big'));
