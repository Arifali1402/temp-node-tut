// path module
const { log } = require('console');
const path = require('path');

// a separator property
console.log(path.sep)

// joining a sequence of path segments using platform specific separator as the limiter and return the normalize resulting path

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);