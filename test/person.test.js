var Person = require("../person");

test('Person given first and last name generates full name', () => {
  var person = new Person("luke", "schoen");
  var actual = person.fullName();
  var expectation = "luke schoen";

  expect(actual).toBe(expectation);
})
