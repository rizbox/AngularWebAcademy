/**
 * Created by ahmed on 12/27/2014.
 */

angular.module('SRMODULE', ['ngResource', 'ngRoute']);

angular.module('SRMODULE').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function(mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin')
        }}
    }

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })

});

angular.module('SRMODULE').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
})
