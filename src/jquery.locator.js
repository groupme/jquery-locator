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
      var handler = ERRORS[code];
      options[handler](message);
    }

    navigator.geolocation.getCurrentPosition(successHandler, failureHandler);
  }
})(jQuery)
