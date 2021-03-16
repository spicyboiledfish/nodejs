import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import routeList from './config';

const App = () => {
    return (
        <div>
            <Link to="/index">首页</Link>
            <Link to="/list">列表页</Link>
            <Switch>
                {
                    routeList.map(item=>{
                            return <Route key={item.path} {...item}></Route>
                    })
                }
            </Switch>
        </div>
    );
}

export default App;