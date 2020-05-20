import React from 'react';
import Header from './Header';
import {Route, Switch} from 'react-router-dom';
import {HomeView, TaskView} from './index';

const Main = props => {
  return (
    <div id="main">
      <Header />
      <Switch>
        <Route path="/tasks" component={TaskView} />
        <Route path="/" component={HomeView} />
      </Switch>
    </div>
  )
}

export default Main;