'use strict';

/**
 * @ngInject
 */
function ChangeCtrl(requireAuth, authService, utilsService) {
  function changePassword(user) {
    if (angular.isDefined(user)) {
      utilsService.show();

      authService.changePassword(user)
      .then(function() {
        utilsService.alert('Success', 'Your password was successfully changed.');
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
    user: {
      email: requireAuth[requireAuth.provider].email
    },
    changePassword: changePassword
  });
}

// Exports
// -------
module.exports = ChangeCtrl;
