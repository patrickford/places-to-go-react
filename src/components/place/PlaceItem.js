import React, { Component } from 'react';

export const PlaceItem = (props) => {
  return(
    <div className='Place-Item'>
      <span>
        <label>City: San Francisco </label>
      </span><input type='text' value={props.name}/>
    </div>
  )
}
