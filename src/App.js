import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './required/Navbar';
import Register from './auth/Register';
import Login from './auth/Login';
import Home from './welcome/Home';

import './App.css';
import LoginHome from './welcome/LoginHome';
import Flights from './components/Flights';

function App() {

  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  let logged = window.localStorage.getItem("isLoggedIn");

  if (logged) {
    return (
      <div className="App">

        <Navbar name="FlightAware" mode={mode} toggleMode={toggleMode} />

        <div className="mt-0">
          <Routes>
            <Route exact path='/' element={<LoginHome />} />
            <Route exact path='/flight-search' element={<Flights />} />
            <Route exact path='/routes' element={<Register />} />
            <Route exact path='/dprice' element={<Register />} />
            <Route exact path='/userGuides' element={<Register />} />

            <Route exact path='/*' element={<LoginHome />} />
          </Routes>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="mt-0">
        <Navbar name="FlightAware" mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />

          <Route exact path='/*' element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
