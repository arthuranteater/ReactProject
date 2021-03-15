import React, { Component } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Cars } from './components/Cars';
import { SellVehicle } from './components/SellVehicle';
import { ViewUsers } from './components/ViewUsers';
import {Counter} from './components/Counter';

const initialState = {

}



class App extends Component {  
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path='/' component={Home}/>
          <Route path='/Inventory' component={Cars}/>
          <Route path='/ViewUsers' component={ViewUsers}/>
          <Route path='/Counter' component={Counter}/>
        </Layout>
      </div>
    )
  }
}

export default App