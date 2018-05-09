import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect }  from 'react-redux';
// import SettingsPlaylist from './SettingsPlaylist'
// import { Form, Checkbox, Button } from 'semantic-ui-react'
import { Button, Table } from 'semantic-ui-react'


class Connections extends Component {
  state = {}

  componentDidMount() {
    this.props.fetchConnections()
  }

  render(){
    console.log("help me", this.props.connections);
    // debugger
    return (
      <div style={{"margin": "auto", "width": "40%", "minWidth": "450px"}}>
        <div style={{"textAlign": "left"}}>
          <p>CONNECTIONS</p>

          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Connection Requests</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            {this.props.connections && Object.keys(this.props.connections).length > 0 && this.props.connections.requests && this.props.connections.requests.length > 0 ? /*<p>one</p>*/
              this.props.connections.requests.map(request => {
                return(
                  <Table.Row>
                    <Table.Cell>{request.user_spotify_id}</Table.Cell>
                    <Table.Cell><Button onClick={()=>{this.props.connectUser(request.user_spotify_id)}}>accept!</Button></Table.Cell>
                    {/*reject button?*/}
                  </Table.Row>
                )
              }
            )
            : "no requested connections"
            }
            </Table.Body>
          </Table>

          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Pending Connections</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            {this.props.connections && Object.keys(this.props.connections).length > 0 && this.props.connections.pending && this.props.connections.pending.length > 0 ? /*<p>one</p>*/
              this.props.connections.pending.map(pending => {
                return(
                  <Table.Row>
                    <Table.Cell>{pending.user_spotify_id}</Table.Cell>
                    <Table.Cell></Table.Cell>
                    {/*reject button?*/}
                  </Table.Row>
                )
              }
            )
            : "no completed connections"
            }
            </Table.Body>
          </Table>

          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Connections</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            {this.props.connections && Object.keys(this.props.connections).length > 0 && this.props.connections.connections && this.props.connections.connections.length > 0 ? /*<p>one</p>*/
              this.props.connections.connections.map(connection => {
                return(
                  <Table.Row>
                    <Table.Cell>{connection.user_spotify_id}</Table.Cell>
                    <Table.Cell><Button as="a" href={`/connection/${connection.user_spotify_id}`}>get results</Button></Table.Cell>
                    {/*reject button?*/}
                  </Table.Row>
                )
              }
            )
            : "no completed connections"
            }
            </Table.Body>
          </Table>

        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  // debugger
  return {
    connections: state.connection,
  };
};

export default connect(mapStateToProps, actions)(Connections);
