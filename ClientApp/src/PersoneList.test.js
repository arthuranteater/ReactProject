import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './components/PersonList'

describe('PersonList', () => {
  it('renders a ul', () => {
    const personListWrapper = shallow(<PersonList />);

    expect(personListWrapper.find('ul')).toHaveLength(1);
  });

  // Test for multiple people
  it('renders the same number of li elements as people', () => {
    const people = [
      { firstName: 'Jane', lastName: 'Curtin' },
      { firstName: 'Chevy', lastName: 'Chase' }
    ];
    const personListWrapper = shallow(<PersonList people={people} />);

    expect(personListWrapper.find('li')).toHaveLength(people.length);
  });
});