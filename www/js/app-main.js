'use strict';

/**
 * @ngInject
 */
function AppMain($ionicPlatform, $window, utilsService, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if ($window.cordova && $window.cordova.plugins && $window.cordova.plugins.Keyboard) {
      $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      $window.cordova.plugins.Keyboard.disableScroll(true);
    }
    if ($window.StatusBar) {
      // org.apache.cordova.statusbar required
      $window.StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeStart', function() {
    // show loading
    utilsService.show();
  });

  $rootScope.$on('$stateChangeSuccess', function() {
    // hide loading
    utilsService.hide();
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    var redirectToState = '';
    var errTitle = 'Error';
    var errMsg = 'There was an error processing your request.';

    event.preventDefault();

    // hide loading
    utilsService.hide();

    if (fromState.name) {
      if (error === 'AUTH_REQUIRED') {
        redirectToState = 'login';
        errTitle = 'Unauthorized';
        errMsg = 'The requested resource requires user authentication.';
      } else {
        redirectToState = fromState.name;
      }
    } else {
      redirectToState = 'home';
    }

    utilsService.alert(errTitle, errMsg);
    $state.go(redirectToState);
  });
}

// Exports
// -------
module.exports = AppMain;
