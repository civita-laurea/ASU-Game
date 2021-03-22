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
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Student from './components/Student';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
      return (
        <div className="App">
            <header className="App-header">
              {
                user 
                  ? <Student />
                  : <p>Please sign in.</p>
              }
              {
                user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button onClick={signInWithGoogle}>Sign in with Google</button>
              }
            </header>
          </div>
      );
    }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
