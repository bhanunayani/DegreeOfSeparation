import Person from './components/home/Person/Person';
import Header from './components/Header/header';
import Relationship from './components/home/Relationship/Relationship';
import DegreeOfSeparation from './components/home/DegreeOfSeparation/DegreeOfSeparation';
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
     <div className="App">
      <Header />
      <div className='appBody'>
        <Person />
        <Relationship />
      </div>
      <DegreeOfSeparation />
    </div>
    )
  }
}

export default App