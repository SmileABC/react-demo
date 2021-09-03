import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Demo from '../views/Demo/index';
import Home from '../views/Home/index';

const routerList = () => (
  <Switch>
    <Route path="/" render={() => <Redirect to="/home" />} exact key="first" />
    <Route path="/demo" component={Demo} key="demo" />
    <Route path="/home" component={Home} key="home" />
  </Switch>
);

export default routerList;
