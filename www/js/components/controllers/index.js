'use strict';

// Exports
// -------
module.exports = angular.module('app.controllers', [])
  .controller('ChangeCtrl', require('./change.controller'))
  .controller('ForgotCtrl', require('./forgot.controller'))
  .controller('HomeCtrl', require('./home.controller'))
  .controller('LoginCtrl', require('./login.controller'))
  .controller('RegisterCtrl', require('./register.controller'))
  .controller('SmsCtrl', require('./sms.controller'))
  .controller('TabsCtrl', require('./tabs.controller'));
