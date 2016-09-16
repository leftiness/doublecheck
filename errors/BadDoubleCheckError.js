/**
 * thrown when the $doublecheck property doesn't look right
 *
 * @param {Object} fn - is a function which has a bad $doublecheck
 */
function BadDoubleCheckError (fn) {

  var message = `
    message: ${proto.name}.$doublecheck looks wrong to me
    $doublecheck: ${JSON.stringify(fn.$doublecheck)}
  `;

  return new Error(message);

};

module.exports = BadDoubleCheckError;

