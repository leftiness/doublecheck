var BadDoubleCheckError = require('../errors/BadDoubleCheckError.js');
var WrongArgsLengthError = require('../errors/WrongArgsLengthError.js');

/**
 * Validate the inputs to doublecheck
 */
function validate () {

  if (arguments.length < 2)
    throw new Error('validate needs arguments');

  var fn = arguments[0];

  if (typeof fn !== 'function')
    throw new TypeError('first argument must be a function');

  var dc = fn.$doublecheck;

  if (!Array.isArray(dc))
    throw new BadDoubleCheckError(fn);

  var args = Array.from(arguments).slice(1);

  if (args.length !== dc.length)
    throw new WrongArgsLengthError(fn, args);

};

module.exports = validate;
