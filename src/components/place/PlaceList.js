import React, { Component } from 'react';
import { PlaceItem } from './PlaceItem';

export const PlaceList = (props) => {
  const places = [{name:"Mama's", location:'san francisco'}, {name:"Burgers", location:'san'},{name:"Gott's", location:'francisco'}];
  return(
    <div className="Place-List">
      <div><h1>Places I want to visit:</h1></div>
      <div><ul> {places.map( place => (<PlaceItem name={place.name} location={place.location} />))} </ul></div>
    </div>
  )
}
