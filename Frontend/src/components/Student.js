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
import AddCourse from './AddCourse'


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
  constructor(props) {
    super(props);
    this.state = {
      showCourseWindow: false,
      showChallengerWindow: false
    }
    //openAddCourse = this.openAddCourse.bind(this)
  }

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
        <IconButton 
          aria-label="Add"
          onClick={() => this.setState({showCourseWindow:true})}>
            <AddIcon />
        </IconButton>
        <div>
          {this.state.showCourseWindow ? <AddCourse /> : null}
        </div>
        
        </Toolbar>
        <TitlebarGridList />
        <Toolbar>
        <h1>My Challenges</h1>
        <IconButton 
         aria-label="Add"
         onClick={() => alert(this.state.showCourseWindow)}>
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
