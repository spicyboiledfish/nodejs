// protocol buffer
const fs = require('fs');
const protocolbuf = require('protocol-buffers');
const schema = protocolbuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'));

console.log(schema);

const buffer = schema.Column.encode({
    id: 1,
    name: '嘻嘻',
    price: 80.4
})
console.log(buffer);
console.log(schema.Column.decode(buffer));
