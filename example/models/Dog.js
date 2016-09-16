// example doublechecked prototype

/**
 * construct a dog
 *
 * @param {String} name - is your dog's name
 */
function Dog (name) {

  this.name = name;

};

// your dog can bark
Dog.prototype.bark = function () {

  console.log(`${this.name} barked!`);

};

// this is where the types get defined
Dog.$doublecheck = [ String ];

module.exports = Dog;

