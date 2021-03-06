// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
const eventApp = angular.module('starter', ['ionic', 'ngStorage']); 

eventApp

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
             .state('authenticate', {
                    url: '/auth', 
                    templateUrl: 'templates/authentication.html', 
                    controller: 'AuthController', 
                    controllerAs: 'auth'
            })         
          
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            /*
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })
            */

            //works
            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/tab-home.html',
                        controller: 'HomeController',
                        controllerAs: 'Ctrl'
                    }
                }
            })

           .state('tab.home-search', {
                url: '/home/search',  
               views: {
                'tab-home': {
                    templateUrl: 'templates/tab-search.html',
                    controller: 'SearchController',
                    controllerAs: 'Srch'
                }
              }
           })

            .state('tab.home-search.event', {
                url: '/home/event',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/event.html',
                        controller: 'EventController',
                        controllerAs: 'Event'
                    }
                }
            })

            .state('tab.search', {
                url: '/search',
                views: {
                    'tab-search': {
                        templateUrl: 'templates/tab-search.html',
                        controller: 'SearchController',
                        controllerAs: 'Srch'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountController', 
                    controllerAs: 'Acct'
                }
                }
            });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/home');

});