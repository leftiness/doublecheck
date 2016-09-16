var TypeCheckError = require('./TypeCheckError.js');

/**
 * thrown when a function is being called with the wrong number of args
 *
 * @param {Object} fn - is a function which failed type checking
 * @param {Object} args - are the arguments
 */
function WrongArgsLengthError (fn, args) {

  var name = fn.name;
  var needed = fn.$doublecheck.length;
  var found = args.length;
  var message = `${name} needs ${needed} args, but I got ${found}`;

  return new TypeCheckError(message, fn, args);

};

module.exports = WrongArgsLengthError;

