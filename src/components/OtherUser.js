import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import Results from './Results'


class otherUser extends Component {

  clickHandler = (event) => {
    this.props.connectUser(this.props.otherUser.otherUser.user_spotify_id)
  }

  render(){
    console.log(this.props);
    return (
      <div>
        {this.props.otherUser.otherUser.user_spotify_id}
        <button onClick={this.clickHandler}>connect!</button>
        {this.props.connectionStatus && this.props.connectionStatus.status === "pending" ? "pending" : null}
        {this.props.connectionStatus && this.props.connectionStatus.status === "complete" ? "complete" : null}
        {this.props.connectionStatus && this.props.connectionStatus.status === "complete" ?
        <Results />
         : null}
      </div>
    )
  }
};


function mapStateToProps(state) {
  return {
    otherUser: state.otheruser,
    connectionStatus: state.connection
  };
};

export default connect(mapStateToProps, actions)(otherUser);
