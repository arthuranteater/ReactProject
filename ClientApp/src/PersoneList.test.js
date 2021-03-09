import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './components/PersonList'

describe('PersonList', () => {
  // Helper function
  let personListWrapper = people => shallow(<PersonList people={people} />);

  it('renders a ul', () => {
    const people = undefined;

    expect(personListWrapper(people).find('ul')).toHaveLength(1);
  });

  it('renders no li elements when no people exist', () => {
    const people = [];

    expect(personListWrapper(people).find('li')).toHaveLength(0);
  });

  it('renders one li element when one person exists', () => {
    const people = [{ firstName: 'Alan', lastName: 'Turing' }];

    expect(personListWrapper(people).find('li')).toHaveLength(1);
  });

  it('renders the same number of li elements as people', () => {
    const people = [
      { firstName: 'Jane', lastName: 'Curtin' },
      { firstName: 'Chevy', lastName: 'Chase' }
    ];

    expect(personListWrapper(people).find('li')).toHaveLength(people.length);
  });

  it('renders the first and last name of each Person', () => {
    const people = [{ firstName: 'Larry', lastName: 'Page' }];
    const plw = personListWrapper(people);

    expect(plw.find('li').text()).toContain(people[0].firstName);
    expect(plw.find('li').text()).toContain(people[0].lastName);
  });

  it('renders no edit buttons if there are no people', () => {
    const buttons = personListWrapper([]).find('button');

    expect(buttons.length).toEqual(0);
  });
  it('renders no edit buttons if there are no people', () => {
    const buttons = personListWrapper([]).find('button');

    expect(buttons.length).toEqual(0);
  });

  // it('renders one edit button per person', () => {
  //   const people = [
  //     { firstName: 'Sergey', lastName: 'Brin' },
  //     { firstName: 'Larry', lastName: 'Page' }
  //   ];
  //   const buttons = personListWrapper(people).find('button');

  //   expect(buttons.length).toBe(2);
  // });

  // // Test for 'edit' text in button element
  // it('includes text on the button saying Edit', () => {
  //   const people = [{firstName: 'Sergey', lastName: 'Brin'}];

  //   expect(personListWrapper(people).find('button').text()).toEqual('Edit');
  // });

  it('call onEdit with the person when clicked', () => {
    const people = [{ firstName: 'Sergey', lastName: 'Brin' }];
    const mockOnEdit = jest.fn();
    const personListWrapper = shallow(<PersonList people={people} onEdit={mockOnEdit} />);

    personListWrapper.find('.btn').simulate('click');

    expect(mockOnEdit).toHaveBeenCalledWith(people[0]);
  });
  
});

// describe('PersonList', () => {
//   it('renders a ul', () => {
//     const personListWrapper = shallow(<PersonList />);

//     expect(personListWrapper.find('ul')).toHaveLength(1);
//   });

//   // Testing first and last name of one person
//   it('renders the first and last name of each Person', () => {
//     const person = {firstName: 'Larry', lastName: 'Page'}
//     const personListWrapper = shallow(<PersonList people={[person]}/>);

//     expect(personListWrapper.find('li').text()).toContain(person.firstName);
//     expect(personListWrapper.find('li').text()).toContain(person.lastName);
//   });
// });