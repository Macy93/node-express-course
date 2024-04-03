const express = require('express')
const app = express()
const path = require('path')//path is preinstalled with node

//setup static ans middleware
//static is a file that the server doesn't have to change such as images,
    //styles, and javascript files
//public folder name for static files
app.use(express.static('./publicPractice'))


//listening for GET requests to the root
app.get('/', (req,res)=>{
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//.resolve is a method//this line is our callback
//in the future the teacher will not use sendFile for index.html files
//index.html goes in the ./public file
//adding to static assets 
//server side rendering (SSR)
})

app.all('*',(req,res)=>{
    res.status(404).send('Resource Not Found')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....')

})