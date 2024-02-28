//10-fs-sync.js

const { readFileSync, writeFileSync } = require('fs')
console.log('start')



//this will printout the contents in the first and second text folders
const first = readFileSync('./temporary/subfolder/first.txt','utf8')

const second = readFileSync('./temporary/subfolder/second.txt','utf8')

//console.log(first, second)

//if the file is not here it will automatically be created so the program created result-sync.txt and put Here is the result: hello
//this is the first file and hello this is the second file in it
//flag added a second here is the result:etc.

writeFileSync(//*INTERESTING the writeFileSync is printing in my result-sync.txt file instead of terminal*
    './temporary/subfolder/result-sync.txt',
    `Here is the result: ${first}, ${second}\n`,
    {flag: 'a'}
)

const sentence =  readFileSync(
  './temporary/subfolder/result-sync.txt',
  "utf8"

)
console.log(sentence)
console.log('done with this task')
console.log('starting the next one')

/*const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')*/