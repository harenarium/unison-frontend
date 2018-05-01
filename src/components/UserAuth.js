import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import Settings from './Settings'

class UserAuthorization extends Component {
  componentDidMount() {
    if (this.props.location.search === "?error=access_denied") {
      this.props.history.push("/");
    } else {
      const code = this.props.location.search.split("?code=")[1];
      this.props.loginUser(code, this.props.history);
      this.props.history.push("/home");
    }
  }

  submitHandler = () => {
    //look for and go to that user's page or give error
  }

  render(){
    return (
      <div>
        <p>this is the user auth success component</p>
        <button onClick={this.props.fetchPlaylists}> update playlists</button>
        <form>
          <input type="text" />
          <input type="submit" onSubmit={this.submitHandler} />
        </form>
        <Settings />
      </div>
    )
  }
};



export default connect(() => ({}), actions)(UserAuthorization);
