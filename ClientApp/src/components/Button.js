
 import React, { Component } from 'react';

 export class Button extends Component{
     render() {
         //below is the equivalent using props
         //return <button type="reset">Submit</button>
        // return <button type="reset">{this.props.text} </button>
        // return <button type="reset" onClick = {this.props.handleClick}>{this.props.text} </button>
        return <button type="View Inventory" onClick = {this.props.handleClick}>{this.props.text} </button>
       
     }
 }