
import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';


class Logout extends Component {

  logout = () => {
    localStorage.clear();
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <Button onClick={this.logout}>Logout</Button>
      </div>
    )
  }
};

export default withRouter(connect(() => ({}), actions)(Logout));
