import reactSSR from '../middleware/index.js';
import Koa from 'koa2';
import static from 'koa-static';
import path from 'path';
import proConfig from '../../share/pro-config.js';

const port = proConfig.nodeServerPort || process.env.PORT;

const app = new Koa();

app.use(static('./dist/static'));

app.use(reactSSR);

app.listen(port);

console.log('server is start.', `http://localhost:${port}`);