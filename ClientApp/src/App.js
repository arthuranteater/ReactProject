import React, { Component } from 'react'
import PersonList from './components/PersonList'

class App extends Component {
state = {people:[]}
  render() {

    return (
      <div className="App">
        <PersonList  people={this.state.people}/>
      </div>
    );
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
