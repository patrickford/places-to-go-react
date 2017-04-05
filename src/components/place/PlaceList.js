import React, { Component } from 'react';
import { PlaceItem } from './PlaceItem';

export const PlaceList = (props) => {
  const places = [{name:"Mama's", location:'san francisco'}, {name:"Burgers", location:'san'},{name:"Gott's", location:'francisco'}];
  return(
    <div>
      <ul> Places I want to visit:
          {places.map( place => (<PlaceItem name={place.name} location={place.location} />))}
      </ul>
    </div>
  )
}
