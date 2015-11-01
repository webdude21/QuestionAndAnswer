questionAndAnswer.factory('notifier', function (toastr) {
    return {
        success: function (msg) {
            toastr.success(msg);
        },
        error: function (error) {
            toastr.error(error.data.message || error.statusText || error || "no message");
        }
    }
});