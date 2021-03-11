import React from 'react';
import { vehicles } from "../utils/data";

class VehicleList extends React.Component {
    state = { showForm: false, vehicles: vehicles };
  
    handleDelete = () => {};
  
    handleAdd = () => {};
  
    render() {
      return (
        <div>
          <h2>History of Vehicles Added</h2>
          <button onClick={this.handleAdd}>Add A Vehicle!</button>
          {vehicles.map((car) => console.log(vehicles))}
          <h2>Conditionally Render List of Items or Form to Add Car</h2>
        </div>
      );
    }
  }
  
  export default VehicleList;