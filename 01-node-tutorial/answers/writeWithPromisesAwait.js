
const {writeFile, readFile} = require('fs').promises//FS NOT DEFINED


const writer = async() =>{
    //3 lines to be written to the temp.txt file
    const threeLines = "Hi there!\n I hope you are having a good day.\n Good bye."

    try{

        //write the threeLines to temp.txt, waiting for the promise to resolve
        // also, looking for VS code to create temp.txt
        await writeFile('temp.txt', threeLines)
        console.log('File has been written')
    } catch (error) {
        //log any errors that occur duing the file writing process
        console.error('Error writing file:', error)
    }
}


//creating another async function called reader
const reader = async() =>{
    try{
        //reading the files , waiting for the promise to resolve
        const first = await readFile('../content/first.txt', 'utf8')
        const second = await readFile('../content/second.txt', 'utf8')

        //logging the return value to the screen????
        console.log(first, second)
    } catch(error) {
        //log any errors that occur duing the file reading process
    console.log('Error reading the files', error)
    }

}

const readWrite = async() => {
    writer()
    reader()

}

readWrite()