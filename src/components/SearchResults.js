import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import OtherUser  from './OtherUser';


class Search extends Component {

  render(){
    console.log(this.props.otherUser.otherUser && this.props.otherUser.otherUser.user_spotify_id);
    return (
      <div>
        {(this.props.otherUser.otherUser && this.props.otherUser.otherUser.user_spotify_id) ? "user found" : "user not found"}
        {(this.props.otherUser.otherUser && this.props.otherUser.otherUser.user_spotify_id) ? <OtherUser user={this.props.otherUser}/> : null}
      </div>
    )
  }
};


function mapStateToProps(state) {
  return {
    otherUser: state.otheruser
  };
};

export default connect(mapStateToProps, actions)(Search);
