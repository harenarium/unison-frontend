import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import SettingsPlaylist from './SettingsPlaylist'
import { Form, Checkbox, Button } from 'semantic-ui-react'

class Settings extends Component {
  state = {}

  handleChange = (e, { value, checked }) => {
    if (value === "some" && checked === true){
      console.log(this.props.settings);
      if (this.props.settings.playlists === true){
        this.props.fetchPlaylists()
        // this.setState({"all": false})
        this.props.userSettings("all", false)
      }
    }
    if (value === "all" && checked === true && this.props.settings.some === true){
      // this.setState({"some": false})
      this.props.userSettings("some", false)
    }
    // this.setState({[value]: checked })
    this.props.userSettings(value, checked)
  }


  componentDidMount() {
    if (localStorage.length > 0) {
      this.props.fetchSettings()
      this.props.fetchPlaylists()
      // const token = localStorage.jwt;
      // this.props.fetchUser(token, this.props.history)
    } else {
      this.props.history.push("/");
    }
  }

  render(){
    console.log(this.props);
    return (
      <div style={{"margin": "auto", "width": "40%", "minWidth": "450px"}}>
      <br />
      <br />
      <br />
        <div style={{"textAlign": "left"}}>
          <p>SETTINGS</p>

          <Checkbox toggle label="automatically update all tracks on login" value='autoupdate'
          checked={this.props.settings.autoupdate}
          onChange={this.handleChange}/>
          <br/><br/>

          <Checkbox toggle label="include saved library " value='library'
          checked={this.props.settings.library}
          onChange={this.handleChange}/>
          <Button size='mini' style={{"float": "right"}} onClick={this.props.updateUserTracks}>manually update library</Button>
          <br/><br/>

          <Checkbox toggle label="include followed artists " value='artists'
          checked={this.props.settings.artists}
          onChange={this.handleChange}/>
          <Button size='mini' style={{"float": "right"}} onClick={this.props.updateUserArtists}>manually update artists</Button>
          <br/><br/>

          <Form>
          <Form.Field>
          <Checkbox toggle label="include all playlists"
          name='playlistToggleGroup'
          value='all'
          checked={this.props.settings.playlists}
          onChange={this.handleChange}
          />
          <Button size='mini' style={{"float": "right"}} onClick={this.props.updatePlaylistTracks}>manually update playlist</Button>
          </Form.Field>
          <Form.Field>
          <Checkbox toggle label="include selected playlists only"
          name='playlistToggleGroup'
          value='some'
          checked={this.props.settings.some}
          onChange={this.handleChange}
          />
          {this.props.settings.some === true ? <Button size='mini' style={{"float": "right"}} onClick={this.props.fetchPlaylists}>refresh playlist list</Button> : null}
          </Form.Field>
          </Form>
          <br/>
          {this.props.settings.some === true && this.props.playlists.length !== 0  ?
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
  return {
    playlists: state.playlist,
    settings: state.setting

  };
};

export default connect(mapStateToProps, actions)(Settings);
