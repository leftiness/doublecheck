var getPrototypeOf = require('../utils/getPrototypeOf.js');

/**
 * thrown for a generic doublecheck error
 *
 * @param {String} message - is the message for the error
 * @param {Object} fn - is a function which failed type checking
 * @param {Object} args - are the arguments
 */
function TypeCheckError (message, fn, args) {

  // not sure how I would handle anonymous functions like this
  var needed = fn.$doublecheck.map(type => type.name);
  // or this ...
  var found = args.map(getPrototypeOf);

  return new TypeError(`
    message: ${message}
    $doublecheck: ${fn.name}(${needed})
    args: ${fn.name}(${found})
  `);

};

module.exports = TypeCheckError;

