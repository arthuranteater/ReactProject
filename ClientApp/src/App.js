import React, { Component } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Inventory } from './components/Inventory';
import { SellVehicle } from './components/SellVehicle';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/Inventory' component={Inventory} />
          <Route path='/SellVehicle' component={SellVehicle} />
          <Route path='/Counter' component={Counter} />
        </Layout>
      </div>
    )
  }
}

export default App