import React from 'react';
import { StaticRouter, Route, matchPath } from 'react-router';
import { renderToString } from 'react-dom/server';
import App from '../router/index';
import routeList from '../router/config';
import matchRoute from '../router/matchRoute';

export default async (ctx, next) => {
    const path = ctx.request.path;

    if( path.indexOf('.') > -1 ){
        ctx.body = null;
        return next();
    }

    // 根据路由获取目标路由对象
    const matchResult = matchRoute(path, routeList);
    let { targetRoute, targetMatch } = matchResult;

    // 数据预取
    const fetchFunc = targetRoute.component.getInitialProps;
    let fetchResult = {};
    if (fetchFunc) {
        fetchResult = await fetchFunc();
    }

    //通过context传递数据
    const context = {
        initialData: fetchResult
    };

    const html = renderToString(<StaticRouter location={path} context={context}><App routeList={routeList} /></StaticRouter>);
    ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>my react ssr</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <textarea id="ssr" style="display: none;">${JSON.stringify(fetchResult)}</textarea>
    </body>
    </html>
    <script type="text/javascript"  src="index.js"></script>
    `;
    await next();
}