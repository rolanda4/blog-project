import React, { useState } from 'react';
import './App.css';
import {Button, Form} from 'react-bootstrap';


// const[ userLoggedIn, setUserLoggedIn] = useState(false);


function Login() {
    return (
      <>
          <Form className="App-Login">
        <input type='username' id='Username' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <Button variant='success'>Login</Button>

        {/* { userLoggedIn === true && <p>Hello User!</p>} */}
        </Form>
      </>
    );
  }
  
  export default Login;