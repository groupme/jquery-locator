Screw.Unit(function() {
  describe("$.getLocation", function() {
    var msg, lat, lng, successResponse, failureResponse;

    function triggerSuccess(location) {
      successResponse(location);
    }

    function triggerFailure(code, message) {
      failureResponse(code, message);
    }

    before(function() {
      delete(lat);
      delete(lng);
      delete(msg);
      navigator.geolocation.getCurrentPosition = function(success, failure) {
        successResponse = success;
        failureResponse = failure;
      }
    });

    it("triggers success callback", function() {
      $.getLocation({
        success: function(location) {
          lat = location.latitude;
          lng = location.longitude;
        }
      });

      triggerSuccess({ latitude: 10, longitude: 20 })

      expect(lat).to(equal, 10);
      expect(lng).to(equal, 20);
    });

    it("triggers unknown error callback", function() {
      $.getLocation({
        unknownError: function(message) {
          msg = message;
        }
      });

      triggerFailure(code=0, "who knows?!");
      expect(msg).to(equal, "who knows?!");
    });

    it("triggers timeout callback", function() {
      $.getLocation({
        timeout: function(message) {
          msg = message;
        }
      });

      triggerFailure(code=3, "timed out!");
      expect(msg).to(equal, "timed out!");
    });

    it("triggers permission denied callback", function() {
      $.getLocation({
        permissionDenied: function(message) {
          msg = message;
        }
      });

      triggerFailure(code=1, "no dice!");
      expect(msg).to(equal, "no dice!");
    });
    
    it("triggers unavailable callback", function() {
      $.getLocation({
        unavailable: function(message) {
          msg = message;
        }
      });

      triggerFailure(code=2, "cannot find!");
      expect(msg).to(equal, "cannot find!");
    });

    
  });
});
