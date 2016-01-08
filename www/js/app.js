'use strict';

// core dependencies
require('ionic');

// third-party plugins
require('firebase');
require('angularfire');
require('angular-messages');
require('angular-validation-match');
require('datetimepicker');

// local modules
require('./templates');
require('./components/controllers');
require('./components/directives');
require('./components/services');

angular.element(document).ready(function() {
  var requires = [
    'ionic',
    'firebase',
    'ngMessages',
    'validation.match',
    'ion-datetime-picker',
    'app.controllers',
    'app.directives',
    'app.services',
    'app.templates'
  ];

  module.exports = angular.module('app', requires)
    .constant('AppSettings', require('./constants'))
    .config(['$ionicConfigProvider', function($ionicConfigProvider) {
      $ionicConfigProvider.navBar.alignTitle('center');
    }])
    .config(require('./routes'))
    .run(require('./app-main'));

  angular.bootstrap(document, ['app']);
});
