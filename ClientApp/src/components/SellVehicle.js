import React, { Component } from 'react';

export class SellVehicle extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      car: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Sell Vehicle Page!</h1>
        <br></br>
        <form onSubmit={this.submitCar}>
<table>
  <tr>
    <td>
    <label>Owner:</label>
    </td>
    <td>
    <input type="input" name="owner" placeholder="Owner" onChange={this.handleInputChange}></input>
         
    </td>
  </tr>
  <tr>
    <td>
    <label>Year:</label>
    </td>
    <td>
    <input type="input" name="year" placeholder="Year" onChange={this.handleInputChange}></input>
         
    </td>
  </tr>
  <tr>
    <td>
    <label>Model:</label>
    </td>
    <td>
    <input type="input" name="model" placeholder="Model" onChange={this.handleInputChange}></input>
         
    </td>
  </tr>
  <tr>
    <td>
    <label>Color:</label>
    </td>
    <td>
    <input type="input" name="color" placeholder="Color" onChange={this.handleInputChange}></input>
         
    </td>
  </tr>
   <tr>
    <td>
<label>Price:</label>
    </td>
    <td>
    <input type="input" name="price" placeholder="Price" onChange={this.handleInputChange}></input>
              
    </td>
  </tr>
  <tr>
    <td colSpan="2">
    <button type="submit">Submit</button>
    </td>
  </tr>
</table>


           
        </form>
        {/* <button className="btn btn-primary" onClick={this.incrementCounter}>View History</button>&nbsp;&nbsp; */}
      </div>
    );
  }
}