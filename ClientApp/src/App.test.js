
import React from 'react'
import { shallow } from 'enzyme'

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { MemoryRouter } from 'react-router-dom';
// it('renders without crashing', async () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>, div);
//   await new Promise(resolve => setTimeout(resolve, 1000));
// });

import App from './App'
describe('App', () => {
  it('renders without crashing', () => {
    const appWrapper = shallow(<App />);
  });
});