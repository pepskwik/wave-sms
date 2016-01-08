'use strict';

/* @ngInject */
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('public', {
    'abstract': true,
    'template': '<ion-nav-view></ion-nav-view>',
    'resolve': {
      /* @ngInject */
      waitForAuth: function(authService) {
        return authService.auth.$waitForAuth();
      }
    }
  })
  .state('login', {
    parent: 'public',
    url: '/login',
    templateUrl: 'login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .state('forgot', {
    parent: 'public',
    url: '/forgot',
    templateUrl: 'forgot.html',
    controller: 'ForgotCtrl',
    controllerAs: 'vm'
  })
  .state('register', {
    parent: 'public',
    url: '/register',
    templateUrl: 'register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm'
  })
  .state('private', {
    'abstract': true,
    'templateUrl': 'tabs.html',
    'controller': 'TabsCtrl',
    'controllerAs': 'vm',
    'resolve': {
      /* @ngInject */
      requireAuth: function(authService) {
        return authService.auth.$requireAuth();
      }
    }
  })
  .state('home', {
    parent: 'private',
    url: '/',
    views: {
      home: {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      }
    }
  })
  .state('sms', {
    parent: 'private',
    url: '/send-sms',
    views: {
      sms: {
        templateUrl: 'sms.html',
        controller: 'SmsCtrl',
        controllerAs: 'vm'
      }
    }
  })
  .state('change', {
    parent: 'private',
    url: '/change-password',
    views: {
      change: {
        templateUrl: 'change.html',
        controller: 'ChangeCtrl',
        controllerAs: 'vm'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
}

// Exports
// -------
module.exports = Router;
