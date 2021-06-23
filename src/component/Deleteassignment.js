import React from 'react';
import axios from 'axios';

class DeleteAssignment extends React.Component {
  state={
    id:'',
  }
  handleChange = event=>{
    this.setState({id:event.target.value});
  }

  onSubmit = ()=>{
    const idObj = {
      id:this.state.id
    }
    axios.delete('https://reqres.in/api/posts/'+String(idObj))
        .then(() => this.setState({ status: 'Delete successful' }));
  }
  render() {
    return (
      <div>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Assignment No
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button onClick={this.onSubmit}>Delete</button>
        </form>
      </div>
    )
  }
}




export default DeleteAssignment;
