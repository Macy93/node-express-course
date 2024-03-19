const {createReadStream} = require('fs')

//this is involking createReadStream, 1st argument is the path
//highWaterMark controls the size of the buffer
//highWaterMark is an options object
//pipe pipes information in chunks instead of one large stream

//set counter to 0
let counter  = 0

//create read stream
const stream = createReadStream('../content/big.txt',{
    highWaterMark:200,
    encoding: 'utf8',
})

//handle data event
stream.on('data', (result) => {
    counter++
    console.log(`Received data: ${result}`)
})

//handle end event
stream.on('end', () =>{
    console.log(`Total number of data received:${counter}`)
})


stream.on('error', (err) => console.log(err)
)

//default the size of the buffer is 64kb
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt',{highWaterMark: 200})
//const stream = createReadStream('./content/big.txt',{encoding: 'utf8'})
