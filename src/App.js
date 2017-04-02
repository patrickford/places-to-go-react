import React, { Component } from 'react';
import { PlaceList } from './components/place';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          <h2><PlaceList /></h2>
        </p>
      </div>
    );
  }
}

export default App;
