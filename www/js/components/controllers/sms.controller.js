'use strict';

/**
 * @ngInject
 */
function SMSCtrl($state, smsService, utilsService) {
  function send(sms) {
    if (angular.isDefined(sms)) {
      utilsService.show();

      smsService.send(sms)
      .then(function() {
        utilsService.alert('Success', 'Your message was successfully sent.');
      })
      .catch(function(err) {
        utilsService.errMessage(err);
      })
      .finally(function() {
        utilsService.hide();
      });
    }
  }

  angular.extend(this, {
    sms: {
      schedule: new Date()
    },
    send: send
  });
}

// Exports
// -------
module.exports = SMSCtrl;
