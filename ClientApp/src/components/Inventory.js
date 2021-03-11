import React from 'react';
import { vehicles } from "../utils/data";

export class Inventory extends React.Component {

  constructor(props) {
    super(props)
    var newCarArray = vehicles;
    this.state = {
      carsList: newCarArray
    };
  }

  returnListOfCarsInHtml(listedCars) {
    const tmpCarsList = []
    for (let i = 0; i < listedCars.length; i++) {
      tmpCarsList.push(
        <div key={i}>
          <p>Car {i+1}</p>
          <ul>
            <li>Owner: {listedCars[i].owner}</li>
            <li>Make: {listedCars[i].make}</li>
            <li>Model: {listedCars[i].model}</li>
            <li>Year: {listedCars[i].year}</li>
            <li>Color: {listedCars[i].color}</li>
          </ul>
        </div>
      )
    }
    return tmpCarsList
  }

  render() {
    console.log("This.state.carsList = ", this.state.carsList)
    return (
      <div>
        <h1>Inventory Page!</h1>
        {this.returnListOfCarsInHtml(this.state.carsList)}
      </div>
    );
  }
}