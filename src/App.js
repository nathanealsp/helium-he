import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import BikeStationList from './Components/bikeStationList';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      {/* <Route path="/:Id" component={BikeStationList} /> */}
    </div>
  </Router>
);

export default App;
