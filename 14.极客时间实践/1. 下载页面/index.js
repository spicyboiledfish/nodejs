const koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');  // 路由中间件
const static = require('koa-static'); // 静态资源中间件
const app = new koa();

app.use(
    static(__dirname + '/source/')
);

app.use(
    mount('/', (ctx, next) => {
        ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8');
    })

);
app.listen(3000);