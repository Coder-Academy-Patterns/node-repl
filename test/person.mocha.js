// Chai library and its `expect` keyword to compare 
// the result of feature implementation and result we expect

var expect = require("chai").expect;
var Person = require("../person");

describe("Person", function() {
  describe("with first and last names given", function() {
    // Expectation
    it("generates full name", function() {
      // Chai Expect - http://chaijs.com/api/bdd/
      var person = new Person("luke", "schoen");
      var actual = person.fullName();
      var expectation = "luke schoen";

      expect(actual).to.equal(expectation);
    });
  });
});