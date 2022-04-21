import React, { Component } from 'react';
import DropDown from '../../../utils/DropDown.js';
import { Card, Button } from 'react-bootstrap';
import { findMatch } from '../../../Actions/api.js'; 
import './DegreeOfSeparation.css';

export class DegreeOfSeparation extends Component {
    constructor() {
        super();
        this.state = {
            person1 : '',
            person2 : '',
            paths : [],
            err: '',
            strPaths : '',
            flag : false
        }
    }
    searchMatch=(e)=>{
      if(this.state.person1 === this.state.person2) {
        this.setState({
          err :'please choose different names'
        })
      }
      else {
        let response = findMatch(this.state.person1,this.state.person2);
        let str = '';
        response.map(user=>{
          user.map(u=>{
            str += "->"+u;
          })
          str += ' || ';
        })
        this.setState({
            paths : response,
            err : '',
            strPaths : str,
            flag: true
          })
      }

    }
  
    setPerson1 = (childData) =>{
      this.setState({person1: childData})
    }
    setPerson2 = (childData) =>{
      this.setState({person2: childData})
    }
  render() {
    const err = this.state.err;
    const str = this.state.strPaths;
    return (
    <div className='dosBody'>
      <Card className='card'>
        <Card.Header as="h5">Find the degree of separation</Card.Header>
        <Card.Body className='cardContent'>
            <DropDown parentCallback = {this.setPerson1} />
            <DropDown parentCallback = {this.setPerson2} />
            <Button variant="primary" type="submit" disabled={(this.state.person1.length && this.state.person2.length)<1} onClick={this.searchMatch}>Search</Button>
        </Card.Body>
      </Card>
      <h5>{str}  </h5>
      {err}
    </div>
    )
  }
}

export default DegreeOfSeparation