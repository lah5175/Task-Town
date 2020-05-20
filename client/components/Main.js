import React from 'react';
import Header from './Header';
import {Route, Switch} from 'react-router-dom';
import HomeView from './HomeView';

const Main = props => {
  return (
    <div id="main">
      <Header />
      <Switch>
        <Route to="/" component={HomeView} />
      </Switch>
    </div>
  )
}

export default Main;