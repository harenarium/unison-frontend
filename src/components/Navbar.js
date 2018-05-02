import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/actions";
import { Link } from 'react-router-dom';
// import { Container, Image, Menu, Button, Label } from 'semantic-ui-react';
import { Image, Menu } from 'semantic-ui-react';
// import LogOut from './LogOut';

class Navbar extends Component {
  render(){
    return (
      <div>
      <Menu>
        <Menu.Item>
          <Link to='/home'>
            UNISON
          </Link>
        </Menu.Item>
        <Menu.Item>
          {this.props.currentUser.user_spotify_id ?
          null:
          <Link to='/about'>
            How it works?
          </Link>}
        </Menu.Item>
        <Menu.Item>
          {this.props.currentUser.user_spotify_id ?
          this.props.currentUser.user_spotify_id
          : null}
        </Menu.Item>
      </Menu>
      <p>---------------------end of nav bar---------------------</p>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth
  };
};

export default connect(mapStateToProps, actions)(Navbar);
