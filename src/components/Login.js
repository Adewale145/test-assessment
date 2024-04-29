import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './authActions';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  }

    
  return (
    <div className='container'>
      <h2 style={{textAlign:"center", fontSize:" 40px"}}>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label className='label'>Username:</label>
          <input type='text' value={username} onChange={handleUsernameChange} />
        </div>
        <div className='form'>
          <label className='label'>Password:</label>
          <input type='password' value={password} onChange={handlePasswordChange} />
        </div>
        <button type='text'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;