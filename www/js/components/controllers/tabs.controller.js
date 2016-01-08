'use strict';

/**
 * @ngInject
 */
function TabsCtrl($state, authService, utilsService) {
  function logout() {
    authService.logout();
    utilsService.alert('Success', 'You have successfully logged out.');
    $state.go('login');
  }

  angular.extend(this, {
    logout: logout
  });
}

// Exports
// -------
module.exports = TabsCtrl;
