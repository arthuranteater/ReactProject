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
import PersonEdit from './components/PersonEdit'

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

  it('has onEdit that will change selectedPerson to person parameter', () => {
    const person = {firstName: 'Bilbo', lastName: 'Baggins'}
    appWrapper.setState({ selectedPerson: undefined }); // <-- Set initial state of App component
  
    appWrapper.instance().onEdit(person);
  
    expect(appWrapper.state().selectedPerson).toBe(person);
  });

  it('has onEdit that will change the selectedView to PersonEdit', () => {
    const person = {firstName: 'Janet', lastName: 'Jackson'}
    appWrapper.setState({selectedView: undefined});
    appWrapper.instance().onEdit(person);
  
    expect(appWrapper.state().selectedView).toEqual('PersonEdit');
  });

  it('renders the edit view when state property is PersonEdit', () => {
    appWrapper.setState({selectedView: 'PersonEdit'});
  
    const personEdit = appWrapper.find(PersonEdit);
    expect(personEdit).toHaveLength(1);
  });

  it('passes onEdit to the PersonList', () => {
    appWrapper.setState({selectedView: undefined});
    const personList = appWrapper.find(PersonList);
  
    expect(personList.props().onEdit).toBeDefined();
  });
  
});
