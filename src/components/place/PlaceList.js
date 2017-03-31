import React, { Component } from 'react';
import { PlaceItem } from './PlaceItem';

export const PlaceList = (props) => {
  const places = ['a', 'b', 'c']
  return(
    <div>
      <ul> "This is just a placeholder for the list"
          {places.map( place => (<PlaceItem name={place.name}/>))}
      </ul>
    </div>
  )
}
