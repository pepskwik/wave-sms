'use strict';

/**
 * @ngInject
 */
function ForgotCtrl($state, authService, utilsService) {
  function resetPassword(user) {
    if (angular.isDefined(user)) {
      utilsService.show();

      authService.resetPassword(user)
      .then(function() {
        utilsService.alert('Success', 'The key was sent to your email.');
        $state.go('login');
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
    user: {},
    resetPassword: resetPassword
  });
}

// Exports
// -------
module.exports = ForgotCtrl;
