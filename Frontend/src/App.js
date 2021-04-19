import React, {Component} from 'react'
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Student from './components/Student';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonAppBar from './components/Header'
import MapChart from './components/Dashboard'
import TitlebarGridList from './components/Cards'
import MyButton from './components/Footer'
import TitlebarGridListChallenges from './components/Challenges'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
    // this group of buttons will be aligned to the right side
    toolbarButtons: {
      marginRIght: 'auto',
    },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  h1: {
    padding: 50,
  },
  h2:{
    float: 'right',
  },
}));


const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Toolbar>
        <h1>Dashboard</h1>
        </Toolbar>
        <MapChart />
        <Toolbar>
        <h1>My Courses</h1>
        <IconButton aria-label="Add">
            <AddIcon />
        </IconButton>
        </Toolbar>
        <TitlebarGridList />
        <Toolbar>
        <h1>My Challenges</h1>
        <IconButton aria-label="Add">
            <AddIcon />
        </IconButton>
        </Toolbar>
        <TitlebarGridListChallenges />
        <MyButton/>
      </div>
    );
  }
}

export default App;