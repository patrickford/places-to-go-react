import React, { Component } from 'react';

export const PlaceItem = (props) => {
  return(
    <div className='Place-Item'>
      <span className="place-info">
        <label>City: {props.location} </label>
      </span>
      <span className="place-info">
        <label>Place: {props.name} </label>
      </span>
    </div>
  )
}
