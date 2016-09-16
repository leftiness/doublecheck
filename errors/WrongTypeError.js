var TypeCheckError = require('./TypeCheckError.js');

/**
 * thrown when a function is being called with the wrong type
 *
 * @param {Object} fn - is a function which failed type checking
 * @param {Object} args - are the arguments
 * @param {Number} index - is the index of the argument which is wrong
 */
function WrongTypeError (fn, args, index) {

  var message = `The type at index ${index} is wrong`;

  return new TypeCheckError(message, fn, args);

};

module.exports = WrongTypeError;

