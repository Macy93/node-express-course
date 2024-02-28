//11-fs-async.js

const {readFile, writeFile} = require('fs')


//without the utf8 we get a buffer reading in the console
//with the utf8 we printed hello this is the first text file
//the(err, result) is the callback

readFile('./temporary/subfolder/first.txt', 'utf8',(err, result) => {
        if (err){
            console.log(err)
            return
        }
        const first = result
        readFile('./temporary/subfolder/second.txt', 'utf8', (err, result) => {
         
             if (err) {
                    console.log(err)
                    return
                }
                 

       const second = result
       writeFile(
        './temporary/subfolder/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err, result) =>{
        if (err){
            console.log(err);
            return
        }
        console.log(result)
        }
    )

    })

})

//-----------------------------------------------------
/*const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
*/