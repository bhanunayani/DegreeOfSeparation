import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { addNewUser, sample } from '../../../Actions/api';
import Alert from 'react-bootstrap/Alert';
import './Person.css'

export class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            msg : ''
        };
      }
    
      handleChange=(event)=> {
        this.setState({name: event.target.value});
      }
    
      handleSubmit=(event)=> {
        let msg = addNewUser(this.state.name);
        this.setState({
          msg : msg
        })
        const inputField = document.getElementById('nameInput');
        inputField.value = '';
        event.preventDefault();
      }

  render() {
    return (
    <form onSubmit={this.handleSubmit} className='perBody'>
      <Card className='card'>
        <Card.Header as="h5">Add new person</Card.Header>
        <Card.Body>
          <Card.Text> Name: <input type="text" id="nameInput" name="name" value={this.state.value} onChange={this.handleChange} />  </Card.Text>
          <Button variant="primary" type="submit" disabled={this.state.name.length<1}>Add Person</Button>
        </Card.Body>
      </Card>
      {this.state.msg}
    </form>
    )
  }
}

export default Person