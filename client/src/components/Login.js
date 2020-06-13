import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        console.log('token', res.data.payload);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblePage');
      })
      .catch((err) => console.error('error', err.message));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default Login;
