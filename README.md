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
        "test-mocha": "./node_modules/.bin/mocha ./test/**/*.mocha.js",
        "test-mocha-watch": "mocha -R list -w ./test/**/*.mocha.js",
      },
      ```
    * Add Test file for person.js and include contents
      ```
      mkdir test && touch test/person.js
      ```
    * Run tests with either 
      ```
      npm run test-mocha
      npm run test-mocha-watch
      ```
    * Reference: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
  * Jest
    * Install Jest
      ```
      npm install --save-dev jest-cli
      touch test/person.test.js
      ```
    * Add to package.json. Note that `console.log(window)` 
    results in error with node test environment set
      ```
      "scripts": {
        "test-jest": "jest",
        "test-jest-watch": "jest --watch"
      },
      "jest": {
        "testEnvironment": "node"
      },
      ```
    * Install Babel to avoid error `Couldn't find preset "env" relative to directory` (Reference: https://github.com/babel/babel-preset-env/issues/186)
      ```
      npm install --save-dev babel-preset-env
      ```
    * Create .babelrc file
      ```
      touch .babelrc
      ```
    * Copy/paste the following in the .babelrc:
      ```
      {
        "presets": [
          [
            "env",  { "modules": false }
          ]
        ]
      }
      ```
    * Run tests with:
      ```
      npm run test-jest
      npm run test-jest-watch
      ```
    * Reference: https://facebook.github.io/jest/
