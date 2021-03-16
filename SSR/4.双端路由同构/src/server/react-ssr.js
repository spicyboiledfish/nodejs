import React from 'react';
import { StaticRouter, Route } from 'react-router';
import { renderToString } from 'react-dom/server';
import App from '../router/index';

export default (ctx, next) => {
    console.log('ctx.request.path', ctx.request.path);
    const path = ctx.request.path;
    const context = {};
    const html = renderToString(<StaticRouter location={path} context={context}><App /></StaticRouter>);
    ctx.body = `<!DOCTYPE html>
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