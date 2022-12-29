import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../css/auth.css';

function Login() {

  const valid = "Logged in Successfully";
  // const userNotExist = "User doesn't exist";
  // const unValid = "Incorrect password";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let user = {
    emailId: email,
    pass: password
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5050/login', user)
      .then((response) => {
        const message = response.data;
        if (message === valid) {

          //Browser localstorage using
          window.localStorage.setItem("email", JSON.stringify(email));
          window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
          window.location.href = "/";
        }
      })
      .catch(error => alert(error.response.data));

    setEmail("");
    setPassword("");

  }

  return (
    <div className='container'>
      <form className='form-container-2' action='' onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className='input-container'>
          <label className='title' htmlFor='email'>Email</label>
          <div>
            <input id='email' name='email' className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='john.doe_1234@gmail.com' required />
          </div>
        </div>

        <div className='input-container'>
          <label className='title' htmlFor='password'>Password</label>
          <div>
            <input id='password' name='password' className='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*********' required />
          </div>
        </div>

        <div className='sign-up-container'>
          <button className='sign-up' type='submit'>Login</button>
        </div>
        <p className='sign-up-bottom-text'>
          <Link to="/register">
            Don't have an account? Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login;