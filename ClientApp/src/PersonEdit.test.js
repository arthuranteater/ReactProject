import React from 'react'
import {shallow} from 'enzyme'
import PersonEdit from './components/PersonEdit'

describe('PersonList', () => {
  it('should render the selected person from props', () => {
    const person = {firstName: 'Grace', lastName: 'Hopper'}
    const personEditWrapper = shallow(<PersonEdit person={person}/>)

    expect(personEditWrapper.find('input')).toHaveLength(2)
    expect(personEditWrapper.find({value: person.firstName})).toHaveLength(1)
    expect(personEditWrapper.find({value: person.lastName})).toHaveLength(1)
  })
})