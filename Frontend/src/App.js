import React, {Component} from 'react'
import './App.css';
import ButtonAppBar from './components/Header'
import TitlebarGridList from './components/Cards'
import MyButton from './components/Footer'
import TitlebarGridListChallenges from './components/Challenges'

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
