var ARRAYUTILSMODULE = (function(exports) {
  exports.ArrayUtils = ArrayUtils;

  function ArrayUtils() {
  };

  ArrayUtils.prototype.isEquivalent = function(arrayA, arrayB) {
    if (arrayA.length != arrayB.length) {
      return false;
    }
    return arrayA.every(function(element, index) {
      return element === arrayB[index];
    });
  };

  return exports;
})(this);
