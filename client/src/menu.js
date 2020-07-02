import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import url from './images/Logo.png';
class menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">

        <ul className="navbar-nav mr-auto">

      <li className="nav-item ">
          <NavLink to="/" className="navbar-brand" href="#">
             <strong><b>Contact List</b></strong>
          </NavLink>
      </li>


          {/* <li className="nav-item ">
            <NavLink to="/" className="nav-link" >Home</NavLink>
          </li> */}
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item" style={{paddingRight:"15px"}}>
            <NavLink to="/login" className="btn btn-primary btn-lg">
            Login
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/signup" className="btn btn-primary btn-lg">Signup</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/userprofile"></NavLink>
          </li>

        </ul>
      </nav>
        )
    }
}

export default menu
