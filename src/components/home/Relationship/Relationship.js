import React, { Component } from 'react';
import DropDown from '../../../utils/DropDown.js';
import { Card, Button } from 'react-bootstrap';
import './Relationship.css';
import {newRelationship} from '../../../Actions/api.js';

class Relationship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person1 : '',
      person2 : '',
    };
  }

  addRelationship=(e)=>{
    // console.log(this.props.allusers)
    newRelationship(this.state.person1,this.state.person2);
  }

  updateMethod() {
    this.forceUpdate();
  }

  setPerson1 = (childData) =>{
    this.setState({person1: childData})
  }
  setPerson2 = (childData) =>{
    this.setState({person2: childData})
  }


  render () {

    return (
      <div className='relBody'>
        <Card className='card'>
        <Card.Header as="h5">Add new Relationship</Card.Header>
        <Card.Body className='cardBody'>
          <div className='dropdownContainer'>
            <DropDown parentCallback = {this.setPerson1} />
            <DropDown parentCallback = {this.setPerson2} />
          </div>
          <div className='button'>
            <Button variant="primary" type="submit" disabled={(this.state.person1.length && this.state.person2.length)<1} onClick={this.addRelationship}>Add as a Friend</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Relationship;