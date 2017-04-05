import React, {Component} from 'react';

export const PlaceForm = (props) => {
  return(
    <div className="Place-Form">
      <input id="place-name" type="text" placeholder="where do you wanna go?" />
      <input id="place-city" type="text" placeholder="what city?" />
    </div>
  )
}
