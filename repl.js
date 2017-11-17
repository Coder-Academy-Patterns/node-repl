// import modules
const Person = require('./person');

// using core Node.js module for REPL
const repl = require('repl');
const replServer = repl.start({prompt: 'prompt> '});

// attach my modules to the repl context
replServer.context.Person = Person;