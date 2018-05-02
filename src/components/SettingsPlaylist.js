import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';

class SettingsPlaylist extends Component {

  render(){
    return (
      <div>
        <p>{this.props.playlist.playlist_name}</p>
        <p>tracks: {this.props.playlist.tracks_total}</p>
      </div>
    )
  }
};



export default SettingsPlaylist
