/*
function SubmitAssignment() {
  return (
    <div className="App">
      <h1>Submit Assignment</h1>
    </div>
  );
}
*/
import React from 'react';

import axios from 'axios';

class SubmitAssignment extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}



export default SubmitAssignment;