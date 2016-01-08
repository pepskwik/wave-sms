'use strict';

/**
 * @ngInject
 */
function smsService($http, $q, AppSettings) {
  return {
    send: function(sms) {
      var deferred = $q.defer();
      var req = {
        method: 'POST',
        url: AppSettings.API_URL + '/sms',
        data: sms
      };

      $http(req)
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(err, status) {
          deferred.reject(err, status);
        });

      return deferred.promise;
    }
  };
}

// Exports
// -------
module.exports = smsService;
