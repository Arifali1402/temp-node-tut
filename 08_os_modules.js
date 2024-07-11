// OS Module
const os = require('os'); // --> Built in module ---> We can also destructure it in order to use specific methods

// info about the current user
const user = os.userInfo();
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// Object to show few more methods
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);
