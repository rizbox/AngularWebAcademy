/**
 * Created by ahmed on 1/3/2015.
 */
angular.module('SRMODULE').controller('mvUserListCtrl',function($scope,mvUser){
    $scope.users = mvUser.query();

})