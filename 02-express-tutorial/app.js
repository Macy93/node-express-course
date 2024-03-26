


console.log('Express Tutorial')

const express = require('express')
const app = express()//initialize the server
const port = 3000//declaring the port

app.use(express.static("./public"))//set up static send to webserver


app.get('/api/v1/test', (req, res) => {//dynamic content
    res.json({message: "It worked!"})
})

app.all('*', (req, res) =>{
    res.status(404).send('Sorry, we cannot find that!')
    
})


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)

})
