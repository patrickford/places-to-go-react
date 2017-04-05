import React, { Component } from 'react';
import { PlaceList, PlaceForm } from './components/place';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit method called!');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PlaceList />
        <div className="App-footer">Footer</div>
        <PlaceForm handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
