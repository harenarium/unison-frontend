import React from 'react';
import Background from '../background/green-shapes.jpg'

// import { Segment, Container, Header, Divider, Grid, Image } from 'semantic-ui-react';

const About = () => {
  return (
    <div style={{"margin": "auto", "width": "40%", "minWidth": "450px", "paddingTop": "10%", "color": "black", "textShadow": "-1px -1px 0 #ccc, 1px -1px 0 #ccc, -1px 1px 0 #ccc, 1px 1px 0 #ccc"}}>


      <img style={{position: "fixed", top: '0', left: '0', zIndex: "-999", maxWidth: "100%"}} src={Background}/>

      <h1>Unison is an app that lets you discover what music you have in common with your friends!</h1>
      <div style={{"textAlign": "left"}}>
      <br />
      <br />
      <br />
      <h2>1. Sign in with Spotify</h2>
      <h2>2. Unison analyzes your Spotify playlists, saved library, and/or followed artist. You can pick what you want to include in your settings</h2>
      <h2>3. Connect with other users using their Spotify id and get your results!</h2>

      </div>
    </div>
  )
};


export default About;
