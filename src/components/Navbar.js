import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/actions";
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Button, Label } from 'semantic-ui-react';
import Login from './Login'
import Logout from './Logout';

class Navbar extends Component {

  renderUserButton = () => {
    return (
      <Button inverted>
      {this.props.currentUser.user_spotify_id}
      {this.props.currentUser.display_name ?
        ` (${this.props.currentUser.display_name})`
        : null}
      </Button>
    );
  }

  renderUserImage = () => {
    return (
      this.props.currentUser.profile_img_url?
      <Image src={this.props.currentUser.profile_img_url} avatar />
      :null
    )
  }

  render(){
    console.log("nav", this.props);
    return (
      <div>
        <Menu position='top' inverted>
          <Menu.Item header>
            <Link to='/home'>
              <h1 style={{"fontFamily": "Rezland", "letterSpacing": "5px"}}>unison</h1>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/about'>
              about
            </Link>
          </Menu.Item>

          {/* right side of fixed nav bar */}
          <Menu.Menu position='right'>
            {this.props.currentUser.user_spotify_id ?
              <Menu.Item>
                <Link to='/connect'>
                  connect
                </Link>
              </Menu.Item>
              : null}
            {this.props.currentUser.user_spotify_id ?
              <Menu.Item>
                <Link to='/settings'>
                  settings
                </Link>
              </Menu.Item>
            : null}
            {this.props.currentUser.user_spotify_id ?
              <Menu.Item>
                {this.renderUserImage()}
                {this.renderUserButton()}

              </Menu.Item>
            : null}
            <Menu.Item>
              {this.props.currentUser.user_spotify_id ?
              <Logout />
              : <Login />}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
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
