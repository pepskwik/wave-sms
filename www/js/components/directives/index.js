'use strict';

// Exports
// -------
module.exports = angular.module('app.directives', [])
  .directive('phoneNumber', require('./phoneNumber.directive'));
