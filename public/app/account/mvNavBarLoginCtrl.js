/**
 * Created by ahmed on 12/28/2014.
 */
angular.module('SRMODULE').controller('mvNavBarLoginCtrl',function($scope,$http,mvIdentity,mvNotifier,mvAuth,$location){
  console.log('mvIdentity  ::'+mvIdentity.currentUser);
    $scope.identity=mvIdentity;

    $scope.signin=function(username,password){
        //console.log("i'm not yet done");
        mvAuth.authenticateUser(username,password).then(function(success){
           if(success){
               mvNotifier.notify('You have successfully signed in!');
           }else{
               mvNotifier.notify('Username/Password combination incorrect');
           }
        });
    }

    $scope.signout=function(){
        mvAuth.logoutUser().then(function(){
            $scope.username="";
            $scope.password="";
            mvNotifier.notify('You have successfully signed out!');
            $location.path('/');
        })
    }
})