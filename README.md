# Node.js Example

* Usage: 
  * Run Example in Node.js REPL
    ```
    npm install
    node repl
    let person1 = new Person("luke", "schoen")
    person1
    person1.fullName()
    ```

* Original Setup
  * Mocha
    * Install Mocha
      ```
      npm install --save-dev mocha
      ```
    * Add to package.json
      ```
      "scripts": {
        "test": "./node_modules/.bin/mocha --reporter spec"
      },
      ```
    * Add Test file for person.js and include contents
      ```
      mkdir test && touch test/person.js
      ```
    * Run tests with either 
      ```
      ./node_modules/.bin/mocha --reporter spec

      npm run test
      ```
    * Reference: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
