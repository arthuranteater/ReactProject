import React from 'react'

// export default () =><ul></ul>

// export default (props) => {
//     const listItems = props.people && props.people.length == 1 ? <li></li> : undefined;

//     return (<ul>
//         {listItems}
//     </ul>);
// }

// export default (props) => {
//     const listItems = props.people ? props.people.map((person, i) => <li key={i}></li>) : undefined;

//     return (<ul>
//         {listItems}
//     </ul>);
// }

// export default ({people = []}) =>
// <ul>{people.map((person, i) => <li key={i}>{person.firstName} {person.lastName}</li>)}</ul>;

// export default ({people = []}) =>
//     <ul>
//         {people.map((person, i) => <li key={i}>{person.firstName} {person.lastName} <button></button></li>)}
//     </ul>

export default ({people = []}) =>
<ul>{people.map((person, i) => <li key={i}>{person.firstName} {person.lastName} <button>Edit</button></li>)}</ul>;