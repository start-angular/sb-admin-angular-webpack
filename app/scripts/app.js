'use strict';
/**
* @ngdoc overview
* @name sbAdminApp
* @description
* # sbAdminApp
*
* Main module of the application.
*/
var angular = require('angular');
import uirouter from 'angular-ui-router';
import routing from './app.config';
var ngModule = angular.module('sbAdminApp', [
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'toggle-switch',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    ])
.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
    .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
    })
    .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
    })
    .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
    .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
    .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
    .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
    })
    .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
    .state('dashboard.panels-wells',{
      templateUrl:'views/ui-elements/panels-wells.html',
      url:'/panels-wells'
        })
    .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
    .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
    .state('dashboard.typography',{
     templateUrl:'views/ui-elements/typography.html',
     url:'/typography'
    })
    .state('dashboard.icons',{
     templateUrl:'views/ui-elements/icons.html',
     url:'/icons'
    })
    .state('dashboard.grid',{
     templateUrl:'views/ui-elements/grid.html',
     url:'/grid'
    })
}]);

require('./controllers')(ngModule);
require('./directives')(ngModule);