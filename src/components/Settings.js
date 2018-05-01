import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';

class Settings extends Component {

  render(){
    debugger
    return (
      <div>
        <p>SETTINGS Component</p>
        {this.props.playlists !=={} ?
        this.props.playlists.forEach(playlist=> playlist.playlist_name)
        : null}
      </div>
    )
  }
};

function mapStateToProps(state) {
  debugger
  return {
    playlists: state.playlist
  };
};

export default connect(()  => ({}), actions)(Settings);
