/**
 * Created by ahmed on 1/1/2015.
 */
angular.module('SRMODULE').factory('mvUser', function($resource) {
    var UserResource = $resource('/api/users/:id', {_id: "@id"});

    UserResource.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return UserResource;
});