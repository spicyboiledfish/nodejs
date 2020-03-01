const EventEmitter = require('events').EventEmitter;

class GeekTime extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('newlesson', { price: Math.random() * 100 }) // 每隔3s发送一个通知
        }, 3000);
    }
}

const geekTime = new GeekTime;

module.exports = geekTime;