import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {NavLink,Route,Switch} from 'react-router-dom';
import ContactList from "./contactlist";
import AddContact from "./addcontact";
class userprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    logout=()=>
    {
        localStorage.removeItem('users');
        window.location.href="/";
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand navbar-light bg-light">
                    <ul class="nav navbar-nav">
                        
                        <li class="nav-item">
                            <NavLink to="/contactlist" className="btn btn-primary">Contacts</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/addcontact" className="btn btn-primary">Add Contact</NavLink>
                        </li>
                        
                    </ul>
                    <ul class="nav navbar-nav ml-auto">
                    <li>
                            <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                            </li>
                    </ul>
                </nav>
                <div style={{paddingTop:"140px"}}>
                    <h1 className="text-success">Only Five small Procedures:-</h1>
                    <h2 className="text-primary">Click on <strong>ADD CONTACT</strong> Button To Save Records</h2>
                    <h2 className="text-primary">Click on <strong>ContactList</strong> Button To See Saved Records</h2>
                    <h2 className="text-primary">After saving Your Records You can also Edit Your Records By <strong>Edit</strong> Button</h2>
                    <h2 className="text-primary">Click on <strong>DELETE</strong> Button To Delete Records</h2>
                    <h2 className="text-primary">Click on <strong>LOGOUT</strong> Button To Logout</h2>
                    </div>
                    </div>
        )
    }
}

export default userprofile
