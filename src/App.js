import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    // const url = 'https://api.citybik.es/v2/networks';
    fetch('https://api.citybik.es/v2/networks').then(results =>
      results.json().then(data => {
        console.log(data.networks);
        console.log(data);
        data.networks.filter(item => item.location.city !== 'Boston, MA');
      })
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
