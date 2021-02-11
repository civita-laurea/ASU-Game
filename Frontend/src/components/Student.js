import React, {Component} from 'react'
import '../App.css';
import ButtonAppBar from './Header'
import TitlebarGridList from './Cards'
import MyButton from './Footer'

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