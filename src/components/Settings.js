import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import SettingsPlaylist from './SettingsPlaylist'

class Settings extends Component {

  render(){
    return (
      <div>
        <p>SETTINGS Component</p>
        {this.props.playlists.length !== 0  ?
        this.props.playlists.map(playlist =>{
          // return playlist.playlist_name
          return <SettingsPlaylist key={playlist.playlist_spotify_id} playlist={playlist} />
        })
        : null}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    playlists: state.playlist
  };
};

export default connect(mapStateToProps, actions)(Settings);
