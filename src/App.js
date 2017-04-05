import React, { Component } from 'react';
import { PlaceList, PlaceForm } from './components/place';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PlaceList />
        <div className="App-footer">Footer</div>
        <PlaceForm />
      </div>
    );
  }
}

export default App;
