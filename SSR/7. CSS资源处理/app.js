const reactSSR = require('./dist/src/server/react-ssr').default;
const Koa = require('koa2');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(static('./dist/static'));
console.log(path.join(__dirname, './dist/static'));

app.use(reactSSR);

app.listen(9001, () => {
    console.log('server is start localhost:9001')
});

