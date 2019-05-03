var request = require("request");

var base_url = "http://localhost:3000"

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World");
        done();
      });
    });
  });
});

describe("Read Cake Sandwich", function() {
  describe("GET /api/cakesandwich", function() {
    it("returns status code 200", function(done) {
      request.get(base_url+"/api/cakesandwich", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns []", function(done) {
      request.get(base_url, function(error, response, body) {
        a=[]
        expect(response).toBe(a);
        done();
      });
    });
  });
});

describe("Read Cake Sandwich", function() {
  describe("GET /api/cakesandwich", function() {
    it("returns status code 200", function(done) {
      request.get(base_url+"/api/staff", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns []", function(done) {
      request.get(base_url, function(error, response, body) {
        a=[]
        expect(response).toBe(a);
        done();
      });
    });
  });
});