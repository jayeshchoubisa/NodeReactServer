import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {NavLink, Switch, Route} from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import Home from './home';
import url from './images/Logo.png';
import UserProfile from './userprofile';
import AddContact from './addcontact';
import ContactList from './contactlist';
import Edit from './edit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
        <Route exact path="/userprofile" component={UserProfile}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/contactlist" component={ContactList}/>
        <Route exact path="/addcontact" component={AddContact}/>
        <Route exact path="/edit/:id" component={Edit}/>
      <Route  exact path="/" component={Home}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
