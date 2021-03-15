import React from 'react';
import Index from '../../client/pages/index';
import { renderToString } from 'react-dom/server';

export default (ctx, next) => {
    const html = renderToString(<Index />);
    ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>my react ssr</title>
    </head>
    <body>
        <div id="root">${html}</div>
    </body>
    </html>
    <script type="text/javascript"  src="index.js"></script>
    `;
    return next();
}

// 服务端中间件的写法使用的是es6 module写法，所以需要babel loader编译一次
