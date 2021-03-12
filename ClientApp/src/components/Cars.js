import React from 'react';
import { vehicles } from "../utils/data";
import SellVehicle from "./SellVehicle";

export class Cars extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      carsList: vehicles,
      viewingList: true
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
  }

  displayForm = () => {
    this.setState(prevState => ({
      ...prevState,
      viewingList: !this.state.viewingList
    }))
  }

  render() {
    if (this.state.viewingList)
    {
      return (
        <div>
          <h1>Cars Page!</h1>
          <button onClick={this.displayForm}>Sell A Vehicle</button>
          {this.returnListOfCarsInHtml(this.state.carsList)}
        </div>
      );
    }
    else
    {
      return (
        <div>
          <button onClick={this.displayForm}>View Inventory</button>
          <SellVehicle propAddCar={this.addNewCar} />
        </div>
      );
    }
  }
}

export default Cars;