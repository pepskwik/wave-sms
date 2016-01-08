'use strict';

/**
 * @ngInject
 */
function utilsService($ionicLoading, $ionicPopup) {
  return {
    show: function() {
      $ionicLoading.show({
        template: 'Please wait...'
      });
    },

    hide: function() {
      $ionicLoading.hide();
    },

    alert: function(title, msg) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: msg
      });
      alertPopup.then(function() {
      });
    },

    errMessage: function(err) {
      var msg = '';

      if (err && err.code) {
        switch (err.code) {
        case 'EMAIL_TAKEN':
          msg = 'This email has been taken.';
          break;
        case 'INVALID_EMAIL':
          msg = 'Invalid Email.';
          break;
        case 'NETWORK_ERROR':
          msg = 'Network Error.';
          break;
        case 'INVALID_PASSWORD':
          msg = 'Invalid Password.';
          break;
        case 'INVALID_USER':
          msg = 'Invalid User.';
          break;
        default:
          msg = 'Unknown Error.';
        }
      }

      this.alert('Error', msg);
    }
  };
}

// Exports
// -------
module.exports = utilsService;

