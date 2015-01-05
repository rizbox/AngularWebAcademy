/**
 * Created by ahmed on 1/4/2015.
 */

angular.module('SRMODULE').controller('mvSignupCtrl', function($scope, mvUser, mvNotifier, $location, mvAuth) {

    $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser($scope,newUserData).then(function() {
            mvNotifier.notify('User account created!');
            $location.path('/');
        }, function(reason) {
            mvNotifier.error(reason);
        })
    }
})