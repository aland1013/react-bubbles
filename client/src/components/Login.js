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
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblePage');
      })
      .catch((err) => console.error('error', err.message));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
        </label>

        <div className='button-row'>
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
