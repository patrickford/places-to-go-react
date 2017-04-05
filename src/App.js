import React, { Component } from 'react';
import { PlaceList, PlaceForm } from './components/place';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    places: [],
    newPlace: ''
  }

  componentDidMount() {
    const places = [{name:"Mama's", location:'san francisco'}, {name:"Burgers", location:'san'},{name:"Gott's", location:'francisco'}];
    this.setState({places});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit method called for ' + e.target.value);
  }

  handleInputChange = (e) => {
    this.setState({newPlace: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PlaceList places={this.state.places}/>
        <div className="App-footer">Footer</div>
        <PlaceForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} newPlace={this.state.newPlace}/>
      </div>
    );
  }
}

export default App;
