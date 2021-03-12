import React, { Component } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Cars } from './components/Cars';
import { SellVehicle } from './components/SellVehicle';
import { ViewUsers } from './components/ViewUsers';


class App extends Component {
  state = {
    people: [
      { firstName: 'Johnny', lastName: 'Carson' },
      { firstName: 'Jay', lastName: 'Leno' },
      { firstName: 'Conan', lastName: 'O\'Brien' },
      { firstName: 'Jimmy', lastName: 'Fallon' }
    ]
   }

   onEdit = (person) => {
    this.setState({
      ...this.state,
      selectedView: 'PersonEdit',
      selectedPerson: person
    })
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path='/' component={Home}/>
          <Route path='/Inventory' component={Cars}/>
          <Route path='/ViewUsers' component={ViewUsers}/>
        </Layout>
      </div>
    )
  }
}

export default App