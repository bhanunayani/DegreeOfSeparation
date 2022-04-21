import React, { Component } from 'react';
import Select from 'react-dropdown-select';
import {users} from '../Actions/api.js';

export class DropDown extends Component {
    constructor() {
      super ();
      this.state = {
        AllUsers : []
      }
    }
    componentDidMount() {
      let options = [];
      for(let i=0;i<users.length;i++) {
        let obj = {
          label : '',
          value : '',
        }
        obj.label = users[i];
        obj.value = users[i];
        options.push(obj);
      }
      this.setState({
        AllUsers : options
      })
    }
    inputHandler=(e)=>{
        this.props.parentCallback(e[0].value);
    }
    
  render() {
    return (
    <div className='dropdown'>
    <Select clearable={false} values={[]} style={{"width":'250px',"height":"40px"}}
      options={this.state.AllUsers}  onChange={this.inputHandler}
      placeholder={'select a person'} dropdownHandle={false} multi={false}
    />
    </div>
    )
  }
}

export default DropDown