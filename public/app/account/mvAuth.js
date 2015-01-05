/**
 * Created by ahmed on 12/28/2014.
 */
angular.module('SRMODULE').factory('mvAuth', function($http, mvIdentity, $q, mvUser) {
    return {
        authenticateUser: function(username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username:username, password:password}).then(function(response) {
                if(response.data.success) {
                    var user = new mvUser();
                    angular.extend(user, response.data.user);
                    mvIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },

        createUser: function($scope,newUserData) {
            $scope.newUser = new mvUser(newUserData);
            var dfd = $q.defer();

            $scope.newUser.$save(function() {
                mvIdentity.currentUser = $scope.newUser;
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        logoutUser: function() {
            var dfd = $q.defer();
            $http.post('/logout', {logout:true}).then(function() {
                mvIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizeCurrentUserForRoute: function(role) {
            if(mvIdentity.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }

        }
    }
});