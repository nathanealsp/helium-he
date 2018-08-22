import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import StationsList from './Components/StationsList';
import './App.css';

const App = () => (
  <Router>
    <div className="main">
      <h1>
        <Link to="/">
          CITY BIKES <sup>USA</sup>
        </Link>
      </h1>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/:Id" component={StationsList} />
      </Switch>
    </div>
  </Router>
);

export default App;
