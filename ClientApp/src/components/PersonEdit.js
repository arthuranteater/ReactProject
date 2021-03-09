import React from 'react'

const PersonEdit = ({person}) => {
  return (
    <React.Fragment>
      <input value={person.firstName}/>
      <input value={person.lastName}/>
    </React.Fragment>
  )
}

export default PersonEdit