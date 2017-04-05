import React, { Component } from 'react';
import { PlaceList, PlaceForm } from './components/place';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    places: [],
    newPlace: {name: '', location: ''}
  }

  componentDidMount() {
    const places = [{name:"Mama's", location:'san francisco'}, {name:"Burgers", location:'san'},{name:"Gott's", location:'francisco'}];
    this.setState({places});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newPlace = this.state.newPlace;
    const newPlacesList = [...this.state.places, newPlace];
    this.setState({
      places: newPlacesList,
      newPlace: {name: '', location: ''}
    })
    console.log('handleSubmit method called for ' + this.state.newPlace.name);
  }

  handleInputChange = (e) => {
    this.setState({newPlace: {name: e.target.value, location: ''}});
    console.log(this.state.newPlace.name);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PlaceList places={this.state.places}/>
        <div className="App-footer">Footer</div>
        <PlaceForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} name={this.state.newPlace.name}/>
      </div>
    );
  }
}

export default App;
