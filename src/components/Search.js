import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import SearchResults from './SearchResults'

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
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.value} onChange={this.changeHandler}/>
          <button>find user</button>
        </form>
        <SearchResults />
      </div>
    )
  }
};


export default connect(() => ({}), actions)(Search);
