const request = require("request");
const base_url = "http://localhost:3000/"
jasmine.DEFAULT_TIMEOUT_INTERVAL =6000
describe("Staff /api/staff", function() {

// read staff **********************
  // describe("GET /api/staff", function() {
  //   it("returns status code 200", function(done) {
  //     request.get(base_url+"api/staff", function(error, response, body) {
  //       expect(response.statusCode).toBe(200);
  //       done();
  //     });
  //   });
  // });


// add staff *************************
  // describe("Add staff /api/staff", function() {
  //   it("returns status code 201", function(done) {
  //     var postData = {
  //       name : "halil",
  //       password : "halil1"
  //     }
  //     var options = {
  //       method : 'post',
  //       body : postData,
  //       url : base_url+"api/staff",
  //       json: true
  //     }
  //     request(options , function(error, response, body) {
  //       expect(response.statusCode).toBe(201);
  //       done();
  //     });
  //   });
  // });

// Delete Staff ***************
// describe("Delete staff /api/staff", function() {
//   it("returns status code 201", function(done) {
    
//     var options = {
//       method : 'delete',
//       url : base_url+"api/staff"+"/10",
//       json: true
//     }
//     request(options, function(error, response, body) {
//       expect(response.statusCode).toBe(200);
//       done();
//     });
//   });
// });



  });

 describe("CakeSandwich /api/cakesandwich", function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL =6000
  //  Adding CakeSandwhich
  it("Add CakeSandwich returns status code 201", function(done) {
        var postData = {
          name : "Chicken Roast",
          status : "on deck"
        }
        var options = {
          method : 'post',
          body : postData,
          url : base_url+"api/cakesandwich",
          json: true
        }
        request(options , function(error, response, body) {
          expect(response.statusCode).toBe(201);
          done();
        });
      });
    });
// GET all Cakesandwich ****************************
    // describe("CakeSandwich /api/cakesandwich", function() {
    //   it("Return all CakeSandwich, returns status code 200", function(done) {
    //     request.get(base_url+"api/cakesandwich", function(error, response, body) {
    //       expect(response.statusCode).toBe(200);
    //       done();
    //     });
    //   });
    // });

// Update cakesandwich status 
    // describe("Update status to cakesandwich ", function() {
    //   it("returns status code 201", function(done) {
    //     var InvenName = "Raspberry Cake"
    //     var postData = {
    //       name : InvenName,
    //       status : "sold out"
    //     }
    //     var options = {
    //       method : 'put',
    //       body : postData ,
    //       url : base_url+"api/cakesandwich/"+InvenName,
    //       json: true
    //     }
       
    //     request(options, function(error, response, body) {
    //       expect(response.statusCode).toBe(201);
    //       done();
    //     });
    //   });
    //  });
// delete CakeSandwich 
// describe("Delete CakeDandwich from inventory", function() {
//     it("returns status code 201", function(done) {
//       var InvenName = "Chicken Roast"
//       // var delData = {
//       //   name : InvenName
//       // }
//       var options = {
//         method : 'delete',
//         // body : delData,
//         url : base_url+"api/cakesandwich/"+InvenName,
//         json: true
//       }
//       request(options, function(error, response, body) {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//     });
//   });

// Order item api
describe("AddOrder ", function() {
// adding item with quantity
  // describe("Ordered Itmes /api/orders", function() {
  //   it("returns status code 201", function(done) {
      
  //     var postData = {
  //       quantity : 2 ,
  //       size : "small", 
  //       name : "kamil",
  //       status : "InQueue"
  //     }
  //     var options = {
  //       method : 'post',
  //       body : postData ,
  //       url : base_url+"api/orders",
  //       json: true
  //     }
  //     request(options, function(error, response, body) {
  //       expect(response.statusCode).toBe(201);
  //       done();
  //     });
  //   });
  // });
// adding time to the ordered items 
  // describe("ADD time to odered item ", function() {
  //   it("returns status code 201", function(done) {
      
  //     var postData = {
  //       id : 1,
  //       time : 10
  //     }
  //     var options = {
  //       method : 'put',
  //       body : postData ,
  //       url : base_url+"api/orders/"+"1",
  //       json: true
  //     }
  //     request(options, function(error, response, body) {
  //       expect(response.statusCode).toBe(201);
  //       done();
  //     });
  //   });
  //  });

});
