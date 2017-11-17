var Person = function(first, last) {
  this.firstName = first;
  this.lastName = last;
  /**
   * Full name of person. 
   * @param {string} first The first name.
   * @param {string} last The last name.
   * @return {string} The result of combining first name and lastname
   */
  this.fullName = function() {
    return String(`${this.firstName} ${this.lastName}`);
  }
}

module.exports = Person;

