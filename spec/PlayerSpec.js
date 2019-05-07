const request = require("request");
const base_url = "http://localhost:3000/"

describe("Read Cake Sandwich", function() {

  describe("GET /api/staff", function() {
    it("returns status code 200", function(done) {
      request.get(base_url+"api/staff", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
 });