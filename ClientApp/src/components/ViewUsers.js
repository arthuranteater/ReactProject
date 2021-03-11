import React from 'react';
import { vehicles } from "../utils/data";

export class ViewUsers extends React.Component {
  state = { showForm: false, vehicles: vehicles };

  handleDelete = () => { };

  handleAdd = () => { };

  render() {
    return (
      <div>
        <h1>View Users Page!</h1>  
      </div>
    );
  }
}