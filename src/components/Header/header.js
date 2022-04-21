import React, { Component } from 'react';
import { Navbar,Container } from 'react-bootstrap';
import './header.css'

class Header extends Component {
  render() {
    return (
    <Navbar bg="light" className='topbar'>
        <Navbar.Brand >Degree Of Separation</Navbar.Brand>
    </Navbar>
    )
  }
}

export default Header