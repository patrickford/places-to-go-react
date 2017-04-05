import React, { Component } from 'react';
import { PlaceItem } from './PlaceItem';

export const PlaceList = (props) => {
  return(
    <div className="Place-List">
      <div><h1>Places I want to visit:</h1></div>
      <div><ul> {props.places.map( place => (<PlaceItem key={place.id} name={place.name} location={place.location} />))} </ul></div>
    </div>
  )
}
