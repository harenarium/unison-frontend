import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import SearchResults from './SearchResults'
import HalfConnections from './HalfConnections'
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
      <div style={{"margin": "auto", "width": "40%", "minWidth": "450px"}}>
        <Form onSubmit={this.submitHandler}>
          <Input fluid action='search' value={this.state.value} onChange={this.changeHandler} placeholder='Search by Spotify id'/>
        </Form>
        <SearchResults />
        <HalfConnections />
      </div>
    )
  }
};


export default connect(() => ({}), actions)(Search);
