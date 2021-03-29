import React, {Component} from 'react'
import '../App.css';
import ButtonAppBar from './Header'
import MapChart from './Dashboard'
import TitlebarGridList from './Cards'
import MyButton from './Footer'
import TitlebarGridListChallenges from './Challenges'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

class Student extends Component {
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

export default Student;
