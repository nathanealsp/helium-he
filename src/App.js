import React, { Component } from 'react';
// import LandingPage from './Components/LandingPage';
import BikeStationList from './Components/bikeStationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LandingPage /> */}
        <BikeStationList />
      </div>
    );
  }
}

export default App;
