import React from 'react';
import { Button } from 'semantic-ui-react';
import Background from '../background/green-shapes.jpg'
// import { Image, Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

// const button = () => {
//   return <a href="http://localhost:3000/api/v1/login">Login With Spotify</a>
// }

const Login = () => {
  return (
    <div style={{"paddingTop":"25%"}}>
      <img style={{position: "fixed", top: '0', left: '0', zIndex: "-999", maxWidth: "100%"}} src={Background}/>
      <Button size='massive' color='green' as="a" href="http://localhost:3000/api/v1/login">Login With Spotify</Button>
    </div>
  )
}

export default Login;
