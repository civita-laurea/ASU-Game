import React, {Component} from 'react'
import './App.css';
import SignIn from './components/SignIn'
import Student from './components/Student'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
             <Switch>
              <Route exact path={"/"} component={SignIn}/>
              <Route exact path={"/sign-up"} component={SignUp}/>
              <Route exact path={"/student"} component={Student}/>
             </Switch>
            </Router>
        );
      }
}
export default App;
