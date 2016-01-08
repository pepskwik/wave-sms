'use strict';

// Exports
// -------
module.exports = angular.module('app.services', [])
  .factory('authService', require('./auth.service'))
  .factory('smsService', require('./sms.service'))
  .factory('utilsService', require('./utils.service'));
