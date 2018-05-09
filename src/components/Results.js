import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';

class Results extends Component {

  componentDidMount() {
    this.props.fetchResults(this.props.match.params.otherUserId)
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <button onClick={()=>this.props.fetchResults(this.props.connection)}> see results (dont usee me)</button>
        {this.props.results && this.props.results.result ? this.props.results.result.map(track => track.track_id + "   ") : "no results"}
      </div>
    )
  }
};


function mapStateToProps(state) {
  return {
    // connection: state.connection.connectionjwt,
    results: state.result
  };
};

export default connect(mapStateToProps, actions)(Results);
