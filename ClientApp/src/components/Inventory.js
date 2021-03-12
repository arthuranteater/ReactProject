import { escapeSelector } from 'jquery';
import React from 'react';
import { vehicles } from "../utils/data";
import SellVehicle from "./SellVehicle";

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
          <p>Car {i + 1}</p>
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

  addNewCar = (car) => {
    this.setState(prevState => ({
      ...prevState.car,
      carsList: this.state.carsList.concat(car)
    }))

    console.log(this.state.carsList);
  }


  render() {
    console.log("This.state.carsList = ", this.state.carsList)

    //if (!bviewInventory) 
    {
      return (
        <div>
          <SellVehicle propAddCar={this.addNewCar} />
        </div>
      );
    }
    //else
     {
      return (
        <div>
          <h1>Inventory Page!</h1>
          {this.returnListOfCarsInHtml(this.state.carsList)}
        </div>
      );
    }
  }
}

export default Inventory;