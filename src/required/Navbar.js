import React from 'react';
import { Link } from 'react-router-dom';
import Airplane from '../asset/airplane.svg';

import '../css/Navbar.css';

function Navbar(props) {

    const logged = window.localStorage.getItem("isLoggedIn");

    const logout = () => {

        //Browser localstorage using
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("isLoggedIn");
        window.location.href="/";
    }

    if (logged) {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">
                            <img className="logo" src={Airplane} width="30" height="30" alt='' />
                            {props.name}
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/fprice">Flights</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/routes">Routes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/dprice">Flight Dates</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/userGuides">User Guides</Link>
                                </li>
                            </ul>

                            <div className='navbar-nav logout'>
                                <Link className="nav-link active" onClick={logout} >Logout</Link>
                            </div>
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Light Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    else {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">
                            <img className="logo" src={Airplane} width="30" height="30" alt='' />
                            {props.name}
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/register">REGISTER</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/login">LOGIN</Link>
                                </li>
                            </ul>

                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Light Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;