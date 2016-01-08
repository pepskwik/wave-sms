'use strict';

/**
 * @ngInject
 */
function phoneNumber() {
  return {
    require: '?ngModel',
    restrict: 'A',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$parsers.push(function(data) {
        return String(data).replace(/\(|\)|\+|\s|\-/g, '');
      });

      ctrl.$validators.phoneNumber = function(data) {
        return !/[a-z]+|[A-Z]+/.test(data);
      };
    }
  };
}

// Exports
// -------
module.exports = phoneNumber;
