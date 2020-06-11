const event_emitter = require('events');

//create class
class myEmitter extends event_emitter {}

// init Object
const my_emitter = new myEmitter();

//event listener
my_emitter.on('event', () => console.log('event fired'));
my_emitter.on('event-2', () => console.log('event-2 fired'));

//init event
my_emitter.emit('event');
my_emitter.emit('event-2');