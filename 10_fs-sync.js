// fs -> file system (sync)

const { readFileSync, writeFileSync } = require('fs');

// // same as
// const fs = require('fs');
// fs.readFileSync()
console.log('Start');
// reading the file
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first)
console.log(second)

// writing into a file or creating a new file or append
writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first}, ${second}`,
    //flag:a --> append
    { flag: 'a' }
);

console.log('Done with the Task');
console.log('Starting the Next');