import React, {Component} from 'react'
import '../App.css';
import ButtonAppBar from './Header'
import MapChart from './Dashboard'
import TitlebarGridList from './Cards'
import MyButton from './Footer'
import TitlebarGridListChallenges from './Challenges'
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

class Student extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <TitlebarGridList />
        <MyButton/>
      </div>
    );
  }
}

export default Student;
