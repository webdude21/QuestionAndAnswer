questionAndAnswer.factory('notifier', function (toastr) {
  return {
    success: function (msg) {
      if (msg.response) {
        msg = msg.response;
      }

      toastr.success(msg);
    },
    error: function (error) {
      if (!error) {
        toastr("no message");
        return;
      }

      if (error.data && error.data.message) {
        error = error.data.message;
      }

      if (error.response) {
        error = error.response;
      }

      if (error.statusText) {
        error = error.statusText;
      }

      if (error.message) {
        error = error.message;
      }

      toastr.error(error);
    }
  }
});
