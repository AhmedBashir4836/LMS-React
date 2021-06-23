import React from 'react';
import axios from 'axios';

class MarkAssignment extends React.Component { 
  state = {
    name:'',
    assignment:'',
    totalMarks:'',
    obtMarks:''
  }
  
  //Set Name
  setName = event=>{
    this.setState({name:event.target.value});
  }
  //Set Assignment No
  setAssignment = event=>{
    this.setState({assignment:event.target.value});
  }

  //Set Total ,arks
  setTotalMarks = event=>{
    this.setState({totalMarks:event.target.value});
  }

  
  //Set Obtained Marks
  setObtMarks = event=>{
    this.setState({obtMarks:event.target.value});
  }

  //Submit Marks
  onSubmitMarks = ()=>{

    const user ={
      name:this.state.name,
      assignment:this.state.assignment,
      totalMarks:this.state.totalMarks,
      obtMarks:this.state.obtMarks
    }
    
// Details of the uploaded file
  console.log(this.state);
// Request made to the backend api
// Send formData object
  axios.post("/api/marks", {user},{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response)=>{
      console.log("Marks uploaded successfully");
    }).catch((error) => {
        console.log("Error");
    });

  };
  render() {
    return (
      <div className="App">
        <p></p>
        <hr/>
        <table className="App">
          <tr>
            <td>Student Name</td>
            <td>Assignment No.</td>
            <td>Total Marks</td>
            <td>Obtained Marks</td>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={this.setName}/>
            </td>
            <td>
              <input type="text" onChange={this.setAssignment}/>
            </td>
            <td>
              <input type="text" onChange={this.setTotalMarks}/>
            </td>
            <td>
              <input type="text" onChange={this.setObtMarks}/>
            </td>
            <td>
              <button onClick={this.onSubmitMarks}>Submit</button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}


export default MarkAssignment;