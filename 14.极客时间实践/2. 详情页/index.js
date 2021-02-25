const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

app.use(
    mount('/static', static(__dirname + '/source/'))
)

app.use(async (ctx) => {
    
})

app.listen(3000)