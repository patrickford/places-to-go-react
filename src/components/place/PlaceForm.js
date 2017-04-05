import React, {Component} from 'react';

export const PlaceForm = (props) => (
  <form onSubmit={props.handleSubmit} className="Place-Form">
    <input id="place-name"
      type="text"
      placeholder="where do you wanna go?"
      onChange={props.handleInputChange}
      value={props.name}
      />
  </form>
)
