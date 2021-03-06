angular.module('app', ['ionic', 'app.controllers', 'app.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.urls', {
        url: '/urls',
        views: {
          'menuContent': {
            templateUrl: 'templates/urls.html'
          }
        }
      })

      .state('app.shorten', {
        url: '/shorten',
        views: {
          'menuContent': {
            templateUrl: 'templates/shorten.html',
            controller: 'ShortenCtrl'
          }
        }
      })
      .state('app.lookup', {
        url: '/lookup',
        views: {
          'menuContent': {
            templateUrl: 'templates/lookup.html',
            controller: 'LookupCtrl'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsCtrl'
          }
        }
      })
      .state('app.single', {
        url: '/urls/:urlId',
        views: {
          'menuContent': {
            templateUrl: 'templates/urlDetails.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/lookup');
  });
