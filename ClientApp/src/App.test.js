// //import { render, screen } from '@testing-library/react';
// import React from 'react';
// import App from './App';
// import { shallow } from 'enzyme';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// describe('App', () => {
//   it('renders without crashing', () => {
//     const appWrapper = shallow(<App />);
//   });
// });

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'//
import PersonList from './components/PersonList'

// describe('App', () => {
//   it('renders without crashing', () => {
//     const appWrapper = shallow(<App />);
//   });

//   it('renders a PersonList', () => {
//     const appWrapper = shallow(<App />);
//     const personList = appWrapper.find(PersonList);

//     expect(personList).toHaveLength(1);
//   });
// });

// describe('App', () => {
//   it('renders a PersonList', () => {});

//   it('has state', () => {
//     const appWrapper = shallow(<App />);
//     const appState = appWrapper.state();

//     expect(appState).not.toBeNull();
//   });

//   it('has people property on state', () => {
//     const appWrapper = shallow(<App />);
//     const appState = appWrapper.state();

//     expect(appState.people).not.toBeUndefined(); // <-- Non-existent property of an object returns undefined
//   });

// });
describe('App', () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it('renders a PersonList', () => {
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it('has state', () => {
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });

  it('has people property on state', () => {
    const appState = appWrapper.state();

    expect(appState.people).not.toBeUndefined();
  });

  it('passes people to PersonList', () => {
    const personList = appWrapper.find(PersonList);
  
    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
  
});
