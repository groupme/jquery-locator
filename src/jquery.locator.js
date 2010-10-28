// jquery-locator
(function($) {
  var ERRORS = {
    0: "unknownError",
    1: "permissionDenied",
    2: "unavailable",
    3: "timeout"
  }

  $.getLocation = function(options) {
    function successHandler(location) {
      options.success(location);
    }

    function failureHandler(code, message) {
      handler = ERRORS[code];
      if (callback = options[handler]) {
        callback(message);
      } else {
        alert("Location attempt failed: " + handler);
      }

    }

    navigator.geolocation.getCurrentPosition(successHandler, failureHandler);
  }
})(jQuery)
