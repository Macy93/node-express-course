const http = require('http')//******problem with ()and ''*****
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html',
{encoding:'utf8'})
const homeStyles = readFileSync('./navbar-app/styles.css',{encoding:'utf8'})
const homeImage = readFileSync('./navbar-app/logo.svg',{encoding:'utf8'})
const homeLogic = readFileSync('./navbar-app/browser-app.js',{encoding:'utf8'})

const server = http.createServer((req, res) =>{
    //console.log(req.method)

    //home page
    const url = req.url
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        return res.end()

//about page
    }else if
        (url === '/about'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>About Page</h1>')
            return res.end()
        

        //styles
    }else if
    (url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        return res.end()

    } else if
    
    //image/logo

(url === '/logo.svg'){
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeImage)
    return res.end()
    

} else if
    
//logic

(url === '/browser-app.js'){
res.writeHead(200,{'content-type':'text/javascript'})
res.write(homeLogic)
return res.end()
}

else {
        //404
res.writeHead (404,{'content-type':'text/html'})
res.write('<h1>Page not found</h1>')
return res.end()

        }
    })

server.listen(3000)