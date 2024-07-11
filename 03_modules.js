// MODULES: Encapsulated code (Only share minimum)
// CommonJS, every file in Node is module (by default)

const names = require('./04_names')
// Destructuring it
const {john, peter} = require('./04_names')
const sayHi = require('./05_utils')
const data = require('./06_alternative_flovor')
require('./07_mind_grenade')


console.log(data)
console.log(names)

sayHi(names.john);
sayHi(names.peter);

// Using Destructuring
sayHi(john);
sayHi(peter);