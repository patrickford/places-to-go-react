import React, {Component} from 'react';

export const PlaceForm = (props) => (
  <form onSubmit={props.handleSubmit} className="Place-Form">
    <input name="placeName" id="place-name" type="text" placeholder="where do you wanna go?" />
  </form>
)
