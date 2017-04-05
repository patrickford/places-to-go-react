import React, { Component } from 'react';

export const PlaceItem = (props) => {
  return(
    <div className='Place-Item'>
      <span>
        <label>City: {props.location} </label>
      </span>
      <span>
        <label>Place: {props.name} </label>
      </span>
    </div>
  )
}
