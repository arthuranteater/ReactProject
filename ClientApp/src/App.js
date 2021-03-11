import React, { Component } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
// //React checkpoint - add options for user stories 
import { Home } from './components/Home';
import { Inventory } from './components/Inventory';
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

  // get currentView() {
  //   if (this.state.selectedView === 'PersonEdit') {
  //     return <PersonEdit person={this.state.selectedPerson }/>;
  //   }
  //   return <PersonList people={this.state.people} onEdit={this.onEdit}/>; // <-- Added onEdit prop
  // }

  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path='/' component={Home}/>
          <Route path='/Inventory' component={Inventory}/>
          <Route path='/SellVehicle' component={SellVehicle}/>
          <Route path='/ViewUsers' component={ViewUsers}/>
        </Layout>
        {/* {this.currentView} */}
      </div>
    )
  }
}

export default App


// import React, { Component } from 'react';
// import { Route } from 'react-router';
// import { Layout } from './components/Layout';
// import { Home } from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

// //React checkpoint - add options for user stories 
// import {UserStoryTodd} from './components/UserStoryTodd';

// import './custom.css'

// export default class App extends Component {
//   static displayName = App.name;

//   render () {
//     return (
//       <Layout>
//         {/*Reach checkpoint - Add a link to user stories*/}
//         <Route exact path='/' component={UserStoryTodd} />
//        {/* <Route exact path='/' component={Home} />*/}
//         <Route path='/counter' component={Counter} />
//         <Route path='/fetch-data' component={FetchData} />
//       </Layout>
//     );
//   }
// }
