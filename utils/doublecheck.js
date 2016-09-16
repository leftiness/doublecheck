var WrongTypeError = require('../errors/WrongTypeError.js');
var validate = require('./validate.js');

/**
 * validate the function's arguments, execute it, and return the result
 *
 * @param {Object} fn - is a function to be executed
 * @param {Object} args - are the arguments
 * @returns {Function} result - is a type checked function
 */
function doublecheck () {

  validate.apply(null, arguments);

  var fn = arguments[0];
  var dc = fn.$doublecheck;
  var args = Array.from(arguments).slice(1);
  var result = fn.bind.apply(fn, [null].concat(args));

  for (var i = 0; i < args.length; i++)
    if (!(args[i] instanceof dc[i]))
      throw new WrongTypeError(fn, args, i);

  return result;

};

module.exports = doublecheck;

