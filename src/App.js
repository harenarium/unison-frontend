import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Login from './components/Login';
import UserAuthorization from './components/UserAuth';
import About from './components/About';
import Settings from './components/Settings'
import Search from './components/Search'
import Results from './components/Results'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>

        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={UserAuthorization} />
        <Route exact path="/about" component={About} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/connect" component={Search} />
        <Route exact path="/connection/:otherUserId" component={Results} />
      </div>
    );
  }
}

export default App;
