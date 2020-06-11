const event_emitter = require('events');
const { v4: uuidv4 } = require('uuid');

class Loger extends event_emitter {
    log(msg) {
        //call event
        this.emit('message', { id: uuidv4(), msg });
    }
}
// const logger = new Logger();

// logger.on('message', (data) => console.log(data));

// logger.log('hi sir!!!')
module.exports = Loger;
