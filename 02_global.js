// GLOBALS - NO WONDOW!!!

// __dirname - path of the current directory
// __filename - file name of the current file
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about the environment where the program is running in or is bring executed

console.log(__dirname)
console.log(__filename)
// console.log(require) --> Gibberish Data (As for now)
// console.log(module) --> Gibberish Data (As for now)
// console.log(process) --> Gibberish Data (As for now)

setInterval(()=>{
    console.log("Hello World");
},1000)