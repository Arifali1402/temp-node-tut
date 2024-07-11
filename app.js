// npm - global command, comes with node
// npm --version

// local dependency - use it in a particular project
// npm i <packageName>
// npm i <packageName> --save or -S

// global dependency - use it in any project
// npm i -g <packageName>
// npm i -g npm

// package.json - manifest file (stores important information about project/packages)
// manual approach (create package.json in the root, creae properties etc)
// npm init (step by step, press enter to accept default values)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)