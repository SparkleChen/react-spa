import React from 'react';
import { Route,Switch } from 'react-router-dom';
import route from './route/index.js';

export const App = () => {
   return (
      <Switch>
        {
           route.map(({name,path,exact=true,component})=>(
            <Route exact={exact} path={path} component={component} key={name}/>
           ))
        }
      </Switch>
   )
}