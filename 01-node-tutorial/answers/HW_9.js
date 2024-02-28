//09-path-module.js

const path = require('path')

console.log(path.sep)// this platform separator will show a \ in the terminal


//set up for path.join()
//const filepath = path.join(__dirname, 'folder', 'file.txt);
const filePath = path.join('/temporary', 'subfolder', 'test.txt') //NEED TO CREATE CONTENT/SUBFOLDER and test.txt file
console.log(filePath)

const base = path.basename(filePath)
console.log(base) //will give you base name which is test.txt


//const absolute = path.resolve(__dirname, 'folder','file.txt')
//this gives us the absolute path to test.txt, we want to know this because the path i different on different environments
//such as my computer compared to another

const absolute = path.resolve(__dirname, 'temporary', 'subfolder', 'test.txt')
console.log(absolute)


