//continuation of 11-fs-async.js

const { readFileSync, writeFileSync } = require('fs')

console.log('start');


const first = readFileSync('./temporary/subfolder/first.txt','utf8')

const second = readFileSync('./temporary/subfolder/second.txt','utf8')

//the WriteFileSync writes the file, it does not print out the "here is the result sentence"

writeFileSync(
    './temporary/subfolder/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')