'use strict';

/**
 * @ngInject
 */
function authService($q, $window, $timeout, $state, $firebaseAuth, $firebaseArray, $firebaseObject, AppSettings) {
  var ref = new $window.Firebase(AppSettings.FURL);
  var auth = $firebaseAuth(ref);

  var Auth = {
    auth: auth,

    user: {},

    createProfile: function(uid, user) {
      var profile = {
        id: uid,
        email: user.email,
        created_at: Date()
      };

      var profileRef = $firebaseArray(ref.child('profile'));
      return profileRef.$add(profile).then(function(rf) {
        var id = rf.key();
        profileRef.$indexFor(id); // returns location in the array
      });
    },

    login: function(user) {
      return auth.$authWithPassword({
        email: user.email,
        password: user.password
      });
    },

    register: function(user) {
      return auth.$createUser({email: user.email, password: user.password})
        .then(function() {
          // authenticate so we have permission to write to Firebase
          return Auth.login(user);
        })
        .then(function(data) {
          // store user data in Firebase after creating account
          return Auth.createProfile(data.uid, user);
        });
    },

    logout: function() {
      auth.$unauth();
    },

    resetPassword: function(user) {
      return auth.$resetPassword({
        email: user.email
      });
    },

    changePassword: function(user) {
      return auth.$changePassword({
        email: user.email,
        oldPassword: user.oldPassword,
        newPassword: user.newPassword
      });
    },

    isSignedIn: function() {
      return !!Auth.user.provider;
    }
  };

  auth.$onAuth(function(authData) {
    if (authData) {
      angular.copy(authData, Auth.user);
      Auth.user.profile = $firebaseObject(ref.child('profile').child(authData.uid));
    } else {
      if (Auth.user && Auth.user.profile) {
        Auth.user.profile.$destroy();
      }

      angular.copy({}, Auth.user);
    }
  });

  return Auth;
}

// Exports
// -------
module.exports = authService;
