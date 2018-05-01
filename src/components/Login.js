import React from 'react';
import { Button } from 'semantic-ui-react';
// import { Image, Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

// const button = () => {
//   return <a href="http://localhost:3000/api/v1/login">Login With Spotify</a>
// }

const Login = () => {
  return (
    <Button as="a" href="http://localhost:3000/api/v1/login">Login With Spotify</Button>
  )
}

export default Login;
