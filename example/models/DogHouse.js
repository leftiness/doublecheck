// example doublechecked class (ofc requires node 6)

var Dog = require('./Dog.js');

/**
 * every good dog needs a house
 */
class DogHouse {

  /**
   * construct a dog house
   *
   * @param {Dog} dog - is the dog in the house
   * @param {Number} size - is the size of the house
   */
  constructor(dog, size) {

    this.dog = dog;
    this.size = size;

  }

};

// this is where the types get defined
DogHouse.$doublecheck = [ Dog, Number ];

module.exports = DogHouse;

