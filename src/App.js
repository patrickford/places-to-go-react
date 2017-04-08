import React, { Component } from 'react';
import { PlaceList, PlaceForm } from './components/place';
import logo from './logo.svg';
import { generateId } from './lib/placehelpers';
import { loadPlaces, createPlace } from './lib/placesService';
import './App.css';

class App extends Component {

  state = {
    places: [],
    newPlace: {id: '', name: '', location: ''}
  }

  componentDidMount() {
    loadPlaces()
      .then(places => this.setState({places}));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newPlace = this.state.newPlace;
    console.log(newPlace);
    const newPlacesList = [...this.state.places, newPlace];
    this.setState({
      places: newPlacesList,
      newPlace: {name: '', location: ''}
    })
    console.log('handleSubmit method called for ' + this.state.newPlace.id);
    createPlace(newPlace)
      .then(() => this.showTempMessage('New Todo Added'));;
  }

  handleInputChange = (e) => {
    const newId = generateId();
    this.setState({newPlace: {id: newId, name: e.target.value, location: 'San Francisco'}});
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
