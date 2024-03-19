const eventEmitter = require('events');

//first emitter event
const customEmitter = new EventEmitter()

customEmitter.on('response', () => {//response is the event we are listening for
    console.log(`data received`)//console.log is the callback
})

customEmitter.emit('response')

//second emitter event
const emitter2 = new EventEmitter();
setInterval(() => {
    emitter2.emit("timer", "Hi there!");
}, 2000);
emitter2.on("timer", (msg) => console.log(msg));

