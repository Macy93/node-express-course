
//04-names

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

/*

const jamie = 'Jamie';
const derek = 'Derek';


const sayHi = (name) => {
    console.log('Hello there ' + name);

}
*/

const names = require('./HW_3')
const sayHi = require('./HW_5')
const data = require('./HW_6')
require('./HW_7')

//console.log(data)

//sayHi('Lori');
//sayHi(names.jamie);
//sayHi(names.derek);
