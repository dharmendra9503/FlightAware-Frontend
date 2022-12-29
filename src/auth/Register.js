import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/auth.css'

function Register() {

  //Need to set alert when register

  // const isExist = "ALready exist";
  const saved = "Registered successfully";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const InputHandler = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    else if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }


  let register = {
    name: name,
    emailId: email,
    pass: password
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5050/register', register)
      .then(response => {
        const message = response.data;
        if(message === saved){
          window.location.href = "/login";
        }
      }
      )
      .catch(error => alert(error.response.data));

    setName("");
    setEmail("");
    setPassword("");
  }


  return (
    <div className='container'>
      <form className='form-container-2' action='' onSubmit={handleSubmit}>
        <h1>REGISTER</h1>
        <div className='input-container'>
          <label className='title' htmlFor='name'>Full Name</label>
          <div>
            <input id='name' name='name' className='name' type="text" placeholder='DHARMENDRA PRAJAPATI' value={name} onChange={InputHandler} required />
          </div>
        </div>
        <div className='input-container'>
          <label className='title' htmlFor='email'>Email</label>
          <div>
            <input id='email' name='email' className='email' type="email" value={email} onChange={InputHandler} placeholder='john.doe_1234@gmail.com' required />
          </div>
        </div>
        <div className='input-container'>
          <label className='title' htmlFor='password'>Password</label>
          <div>
            <input id='password' name='password' className='password' type="password" value={password} onChange={InputHandler} placeholder='*********' required />
          </div>
        </div>
        <div className='sign-up-container'>
          <button className='sign-up' type='submit'>Register</button>
        </div>
        <p className='sign-up-bottom-text'>
          <Link to="/login">
            Already have an account? Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register;