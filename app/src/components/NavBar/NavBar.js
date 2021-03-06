import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'



class NavBar extends Component {
  render() {
    return (
      <nav className="Menu navbar navbar-expand-lg navbar-light">
        <a className="Logo navbar-brand" href="/">
          HotelScanner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="NavBar__Selected"
                className="nav-link"
                to="/admin">
                 Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="NavBar__Selected"
                className="nav-link"
                to="/logout">
                 Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar; 
