// don't have normal functions doublechecked yet

/**
 * utility for Foo.prototype -> "Foo"
 *
 * @param {Object} obj - the object
 * @returns {String} name - the name of the prototype
 */
function getPrototypeOf (obj) {

  return Object.getPrototypeOf(obj).constructor.name;

};

module.exports = getPrototypeOf;

