import React, { Component } from 'react';
import { PlaceList, PlaceForm } from './components/place';
import logo from './logo.svg';
import { generateId } from './lib/placehelpers';
import './App.css';

class App extends Component {

  state = {
    places: [],
    newPlace: {id: '', name: '', location: ''}
  }

  componentDidMount() {
    const places = [
      {id: 10101, name:"Mama's", location:'san francisco'},
      {id: 10102, name:"Burgers", location:'san'},
      {id: 10103, name:"Gott's", location:'francisco'}];
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
    console.log('handleSubmit method called for ' + this.state.newPlace.id);
  }

  handleInputChange = (e) => {
    const newId = generateId();
    this.setState({newPlace: {id: newId, name: e.target.value, location: ''}});
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
