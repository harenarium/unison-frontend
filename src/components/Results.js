import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';

class Results extends Component {

  componentDidMount() {

  }

  render(){
    console.log(this.props);
    return (
      <div>
      </div>
    )
  }
};


function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps, actions)(Results);
