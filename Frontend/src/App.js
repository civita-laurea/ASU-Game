import React, {Component} from 'react'
import './App.css';
import ButtonAppBar from './components/Header'
import TitlebarGridList from './components/Cards'
import MyButton from './components/Footer'
import TitlebarGridListChallenges from './components/Challenges'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
    // this group of buttons will be aligned to the right side
    toolbarButtons: {
      marginLeft: 'auto',
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

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <h1>My Courses</h1>
        <TitlebarGridList />
        <h1>My Challenges</h1>
        <TitlebarGridListChallenges />
        <MyButton/>
      </div>
    );
  }
}

export default App;
