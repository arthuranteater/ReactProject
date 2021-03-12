import React, { Component } from 'react';

export class SellVehicle extends Component {

  state = {
    car: {
      owner: "",
      year: "",
      make: "",
      model: "",
      color: "",
      price: ""
    }
  }

  submitCar = (event) => {
    event.preventDefault();
    console.log("entered submit car");
    console.log(this.state.car);   
    this.props.propAddCar(this.state.car);
  }

  handleInputChange = (event) => {
    event.persist();
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        [event.target.name]: event.target.value
      }
    }))
  }

  render() {
    return (
      <div>
        <h1>Sell Vehicle Page!</h1>
        <br></br>
        <form onSubmit={this.submitCar}>
          <input type="input" name="owner" placeholder="Owner" onChange={this.handleInputChange}></input>
          <input type="input" name="year" placeholder="Year" onChange={this.handleInputChange}></input>
          <input type="input" name="make" placeholder="Make" onChange={this.handleInputChange}></input>
          <input type="input" name="model" placeholder="Model" onChange={this.handleInputChange}></input>
          <input type="input" name="color" placeholder="Color" onChange={this.handleInputChange}></input>
          <input type="input" name="price" placeholder="Price" onChange={this.handleInputChange}></input>
          <button type="submit">Submit</button>
        </form>
        {/* <button className="btn btn-primary" onClick={this.incrementCounter}>View History</button>&nbsp;&nbsp; */}
      </div>
    );
  }
}

export default SellVehicle;