//12-http.js

const http = require('http')

//creating a server //req - request and res-response are standard parameters used
const server = http.createServer((req, res) =>{
    if(req.url === '/') {
        return res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        
        return res.end('Here is our short history')
    }
        return res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    
    
    
    //res.write('Welcome to our home page')
    //res.end()

})

server.listen(3000)
//in the url type localhost:3000
//ctrl c to exit program
