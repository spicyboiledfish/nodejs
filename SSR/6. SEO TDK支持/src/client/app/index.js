import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import matchRoute from '../../router/matchRoute';
import App from '../../router/index';
import routeList from '../../router/config';

const initialData = JSON.parse(document.getElementById('ssr').value);

const route = matchRoute(document.location.pathname, routeList);

let { targetRoute } = route;
if (targetRoute) {
    //设置组件初始化数据
    targetRoute.initialData = initialData;
}

ReactDOM.hydrate(<BrowserRouter><App routeList={routeList} /></BrowserRouter>, document.getElementById('root'));