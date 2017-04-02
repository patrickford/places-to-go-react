import React, { Component } from 'react';
import { PlaceItem } from './PlaceItem';

export const PlaceList = (props) => {
  const places = [{name:'a', location:'san francisco'}, {name:'b', location:'san'},{name:'c', location:'francisco'}];
  return(
    <div>
      <ul> "This is just a placeholder for the list"
          {places.map( place => (<PlaceItem name={place.name} location={place.location}/>))}
      </ul>
    </div>
  )
}
