//continuation of 11-fs-async.js

const {readFile, writeFile} = require('fs')

console.log('start at')

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
        './temporary/subfolder/output.txt',
    "This is line 1",
    (err, result) =>{        
            console.log("at point 1");
            if (err) {
                console.log("This error happened: ", err)
            }else {
                console.log("All is well:D")
            
        }
    })
        console.log("The end")
        }
    )

    })
    //the console.log statments do not appear in order probably because it takes some time 
    //for the writeFile to check the output folder, so while it was doing that it printed
    //out the other console.log's

