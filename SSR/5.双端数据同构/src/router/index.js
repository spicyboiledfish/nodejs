import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const App = ({routeList}) => {
    return (
        <div>
            <Link to="/index">首页</Link>
            <Link to="/list">列表页</Link>
            <Switch>
                {
                    routeList.map((item, index) =>{
                        return item.initialData ? 
                            <Route
                                key={item.path} 
                                exact={item.exact} 
                                path={item.path} 
                                render={(props)=>{
                                    return <item.component {...props} initialData={item.initialData}></item.component>
                                }}>
                            </Route> :
                            <Route key={item.path} {...item}></Route>
                    })
                }
            </Switch>
        </div>
    );
}

export default App;