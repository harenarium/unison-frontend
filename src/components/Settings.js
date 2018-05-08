import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import SettingsPlaylist from './SettingsPlaylist'
import { Form, Checkbox, Button } from 'semantic-ui-react'

class Settings extends Component {
  state = {}
  handleChange = (e, { value }) => {
    console.log("e");
    console.log(e);
    console.log(value);
    this.setState({ value })
  }

  render(){
    return (
      <div style={{"margin": "auto", "width": "40%", "minWidth": "450px"}}>
      <br />
      <br />
      <br />
        <div style={{"textAlign": "left"}}>
          <p>SETTINGS</p>

          <Checkbox toggle label="automatically update all tracks on login" />
          <br/><br/>

          <Checkbox toggle label="include saved library " />
          <Button size='mini' style={{"float": "right"}} onClick={this.props.updateUserTracks}>manually update library</Button>
          <br/><br/>

          <Checkbox toggle label="include followed artists " />
          <Button size='mini' style={{"float": "right"}} onClick={this.props.updateUserArtists}>manually update artists</Button>
          <br/><br/>

          <Form>
          <Form.Field>
          <Checkbox toggle label="include all playlists"
          name='playlistToggleGroup'
          value='all'
          checked={this.state.value === 'all'}
          onChange={this.handleChange}
          />
          <Button size='mini' style={{"float": "right"}} onClick={this.props.updatePlaylistTracks}>manually update playlist</Button>
          </Form.Field>
          <Form.Field>
          <Checkbox toggle label="include some playlists"
          name='playlistToggleGroup'
          value='some'
          checked={this.state.value === 'some'}
          onChange={this.handleChange}
          />
          <Button size='mini' style={{"float": "right"}} onClick={this.props.fetchPlaylists}>refresh playlist list</Button>
          </Form.Field>
          </Form>

          {this.state.value === 'some' && this.props.playlists.length !== 0  ?
          this.props.playlists.map(playlist =>{
            return <SettingsPlaylist key={playlist.playlist_spotify_id} playlist={playlist} />
          })
          : null}
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  // debugger
  return {
    playlists: state.playlist
    //grab settings from database to render initial state of stettings

  };
};

export default connect(mapStateToProps, actions)(Settings);
