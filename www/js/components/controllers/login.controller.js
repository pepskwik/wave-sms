'use strict';

/**
 * @ngInject
 */
function LoginCtrl($state, $window, AppSettings, authService, utilsService, $firebaseObject) {
  var ref = new $window.Firebase(AppSettings.FURL);
  var userkey = '';

  function login(user) {
    if (angular.isDefined(user)) {
      utilsService.show();

      authService.login(user)
      .then(function(authData) {
        ref.child('profile').orderByChild('id').equalTo(authData.uid).on('child_added', function(snapshot) {
          var obj;
          userkey = snapshot.key();
          obj = $firebaseObject(ref.child('profile').child(userkey));

          obj.$loaded()
            .then(function() {
              $state.go('home');
            })
            .catch(function(err) {
              utilsService.errMessage(err);
            })
            .finally(function() {
              utilsService.hide();
            });
        });
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
    login: login
  });
}

// Exports
// -------
module.exports = LoginCtrl;
