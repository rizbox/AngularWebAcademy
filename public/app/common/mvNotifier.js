/**
 * Created by ahmed on 12/28/2014.
 */
angular.module('SRMODULE').value('mvToastr', toastr);

angular.module('SRMODULE').factory('mvNotifier', function(mvToastr) {
    return {
        notify: function(msg) {
            mvToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            mvToastr.error(msg);
            console.log(msg);
        }
    }
})