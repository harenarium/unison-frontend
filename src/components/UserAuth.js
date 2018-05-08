import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import Settings from './Settings'
import Search from './Search'

class UserAuthorization extends Component {
  componentDidMount() {

    if (this.props.location.search === "?error=access_denied") {
      this.props.history.push("/");
    } else if (this.props.location.search.slice(0,6) === "?code="){
      const code = this.props.location.search.split("?code=")[1];
      this.props.loginUser(code, this.props.history);
      this.props.history.push("/home");
    } else if (localStorage.length > 0) {
      const token = localStorage.jwt;
      this.props.fetchUser(token, this.props.history)
    } else {
      this.props.history.push("/");
    }
  }

  render(){
    return (
      <div>
        <Search />
        <Settings />
      </div>
    )
  }
};


export default connect(() => ({}), actions)(UserAuthorization);
