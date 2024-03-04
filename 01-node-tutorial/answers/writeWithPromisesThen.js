const {writeFile, readFile} = require('fs').promises
const threeLines = "Hi there!\n I hope you are having a good day.\n Goodbye!"

writeFile('temp.txt', threeLines)//this might write all 3 lines but want to write line 1
.then(() => {
    return writeFile('temp.txt', threeLines)//want to write line 2
})
.then(() =>{
    return writeFile('temp.txt', threeLines)

}) 

.then(() =>{
    return readFile('temp.txt','utf-8')
})
.then((readResult) => {
    console.log(readResult)
})


//need a .then to call the readFile
    //also a console.log

//need a .then to log the data to the screen
    //also a console.log

.catch((error) => {
    console.log("An error occurred:", error)
})


