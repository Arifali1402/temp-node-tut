// http module
const http = require('http');
// req represent the incoming request
// res is what we are sending back
const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our Home Page');
    }
    else if (req.url === '/about') {
        res.end('Here is our short story')
    }
    else {
        res.end(`
            <h1>OOPS!</h1>
            <p>We cannot seem to find the page you are looking for</p>
            <a href="/">Back Home</a>
            `)
    }

})

server.listen(5000);