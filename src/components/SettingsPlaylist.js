import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import { Checkbox } from 'semantic-ui-react'

class SettingsPlaylist extends Component {

  render(){
    return (
      <div style={{"paddingLeft": "50px"}}>
        <Checkbox label={<label>{` ${this.props.playlist.playlist_name}   (tracks: ${this.props.playlist.tracks_total})`}</label>} />
      </div>
    )
  }
};



export default SettingsPlaylist
