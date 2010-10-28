# jQuery Locator

A simple wrapper around HTML5 location stuff. Probably doesn't even need jQuery.

## Usage

Call `$.getLocation`, specifying your callbacks.

    $.getLocation({
      success: function(location) {},
      timeout: function(message) {},
      unavailable: function(message) {},
      permissionDenied: function(message) {},
      unknownError: function(message) {}
    });

If the browser supports geolocation, `$.getLocation` will return `true`. Otherwise, it will return `false`.