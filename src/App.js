import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import AvengerDetail from './components/AvengerDetail';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/avenger-detail/:id" component={AvengerDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default App;
