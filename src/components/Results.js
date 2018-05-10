import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
import { Button, Table } from 'semantic-ui-react'


class Results extends Component {

  componentDidMount() {
    this.props.fetchResults(this.props.match.params.otherUserId)
  }

  render(){
    console.log(this.props);
    return (
      <div style={{"margin": "auto", "width": "40%", "minWidth": "450px"}}>

        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Shared Tracks</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.props.results && Object.keys(this.props.results).length > 0 ?
            this.props.results.resulttracks.map(track => {
              return (
                <Table.Row>
                  <Table.Cell>{track.track_name}</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              )})
            : "loading..."}
          </Table.Body>
        </Table>

        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>More Tracks</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.props.results && Object.keys(this.props.results).length > 0 ?
            this.props.results.resultmoretracks.map(track => {
              return (
                <Table.Row>
                  <Table.Cell>{track.track_name}</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              )})
            : "loading..."}
          </Table.Body>
        </Table>

        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Shared Artists</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.props.results && Object.keys(this.props.results).length > 0 ?
            this.props.results.resultartists.map(artist => {
              return (
                <Table.Row>
                  <Table.Cell>{artist.artist_name}</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              )})
            : "loading..."}
          </Table.Body>
        </Table>


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
