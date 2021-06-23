
/*function MarkAssignment() {
  return (
    <div className="App">
      <h1>Mark Assignment</h1>
    </div>
  );
}*/

import React from 'react';
import axios from 'axios';

class MarkAssignment extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="App">
        <table className="App">
          <tr>
            <td>Assignment No.</td>
            <td>Total Marks</td>
            <td>Obtained Marks</td>
          </tr>
        </table>
      </div>
    )
  }
}


export default MarkAssignment;