import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import SearchResults from './SearchResults'
import Connections from './Connections'
import { Form, Input } from 'semantic-ui-react'

class Search extends Component {
  constructor(){
    super()
    this.state={
      value: ""
    }
  }



  changeHandler = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.findUser(this.state.value)
  }

  render(){
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <Input action='search' value={this.state.value} onChange={this.changeHandler} placeholder='Search by Spotify id'/>
        </Form>
        <SearchResults />
        connections here
      </div>
    )
  }
};


export default connect(() => ({}), actions)(Search);
