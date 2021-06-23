import './App.css';
import { Route, Switch } from 'react-router';
import DeleteAssignment from './component/Deleteassignment';
import MarkAssignment from './component/Markassignment';
import SubmitAssignment from './component/Submitassignment';
import UploadAssignment from './component/Uploadassignment';
import Error from './Error';
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to LMS Portal</h1>
      
        <NavLink activeClassName="active_class" to="/uploadassignment">Upload Assignment</NavLink>
        <NavLink activeClassName="active_class" to="/submitassignment">Submit Assignment</NavLink>
        <NavLink activeClassName="active_class" to="/markassignment">Mark Assignment</NavLink>
        <NavLink activeClassName="active_class" to="/deleteassignment">Delete Assignment</NavLink>
      
      <Switch>
        <Route exact path="/"/>
        <Route path='/uploadassignment' component={UploadAssignment}/>
        <Route path='/submitassignment' component={SubmitAssignment}/>
        <Route path='/markassignment' component={MarkAssignment}/>
        <Route path='/deleteassignment' component={DeleteAssignment}/>
        <Route component={Error}/>
      </Switch>
     {/* <UploadAssignment/>
      <SubmitAssignment/>
      <MarkAssignment/>
     <DeleteAssignment/>*/}
    </div>
  );
}

export default App;
