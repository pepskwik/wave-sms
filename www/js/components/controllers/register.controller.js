'use strict';

/**
 * @ngInject
 */
function RegisterCtrl($state, authService, utilsService) {
  function register(user) {
    if (angular.isDefined(user)) {
      utilsService.show();

      authService.register(user)
        .then(function() {
          utilsService.alert('Success', 'The user was successfully created.');
          $state.go('home');
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
    register: register
  });
}

// Exports
// -------
module.exports = RegisterCtrl;
