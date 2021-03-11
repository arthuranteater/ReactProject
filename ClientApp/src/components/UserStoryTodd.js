import React, { Component } from 'react';
import { Button } from './Button';

export class UserStoryTodd extends Component {
    // static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { currentVehicleCount: 0 };
        //this.incrementVehicleCount = this.incrementVehicleCount.bind(this);
      }
    
    render() {
        return (
          <div>
            <h1>Display Inventory</h1>    
            <p></p>    
            <p aria-live="polite">Number of Vehicles: <strong></strong></p>          
            <button className="btn btn-primary" onClick={this.incrementCounter}>View History</button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={this.incrementCounter}>View Inventory</button>
          </div>
        );
      }
    }