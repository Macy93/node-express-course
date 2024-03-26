
const express = require('express')
const app = express()

//app is path which is '/', get is callback which is(req,res) 
app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

//all covers all http verbs such as GET, POST ect.
//setting up my own 404 response
//* for the path because it covers all of the paths, if it cannot find
//      the resource then we want a 404 response
//can chain methods like status() and send()

app.all('*', (req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5000, () =>{
console.log('server is listening on port 5000...')
})



//Below is considered middleware
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen