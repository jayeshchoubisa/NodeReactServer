import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import AuthService from './services/auth.services';
import {NavLink} from 'react-router-dom';

class addcontact extends Component {
    constructor(props) {
        super(props)
        const users=JSON.parse(localStorage.getItem('users'));
        console.log(users._id);
        this.state = {
            contacts:{
                name:"",
                address:"",
                country:"",
                contact:"",
                users:[users._id]
            },
            errors:{
                name:"",
                address:"",
                country:"",
                contact:""
            }
                 
        }
    }


    validateAddress(address)
    {
      const errors=this.state.errors;
      if(address=="")
      {
          this.state.errors['address']="Please enter the  address";
          this.setState({errors});
          return false; 
      }
          this.state.errors['address']="";
          return true;
    }

    validateName(name)
    {
        var pattern = /^[a-zA-Z ]{0,30}$/;
        const errors=this.state.errors;
        if(name=="")
        {
            this.state.errors['name']="Please enter the Name";
            this.setState({errors:errors});
            return false;
        }
        if(!(name.match(pattern)))
        {
          this.state.errors['name']="Please enter only alphabet";
            this.setState({errors:errors});
            return false;
        }
        this.state.errors['name']="";
        this.setState({errors:errors});
        return true;
    }

    validateContact(contact)
    {
      const errors=this.state.errors;
        var phoneno = /^\d{10}$/;
        if(contact=="")
        {
            this.state.errors['contact']="Please enter the contact number";
            this.setState({errors});
            return false; 
        }
        else if(!(contact.match(phoneno)))
        {
            this.state.errors['contact']="Please enter the 10 digit contact number";
            this.setState({errors});
            return false; 
        }
        this.state.errors['contact']="";
        return true;
    }

    validateCountry(country)
    {
      const errors=this.state.errors;
      if(country=="")
      {
          this.state.errors['country']="Please enter the country";
          this.setState({errors});
          return false; 
      }
          this.state.errors['country']="";
          return true;
    }

    changeHandler=(event)=>
    {
        const contacts=this.state.contacts;
        contacts[event.target.name]=event.target.value;
        if(event.target.name=="name")
        {
            this.validateName(event.target.value);
        }
        else if(event.target.name=="contact")
        {
            this.validateContact(event.target.value);
        }
        else if(event.target.name=="country")
        {
            this.validateCountry(event.target.value);
        }
        else if(event.target.name=="address")
        {
            this.validateAddress(event.target.value);
        }
        this.setState(contacts);
    }

    handleClick=event=>
    {
        event.preventDefault();
        const contacts=this.state.contacts;
        const validname=this.validateName(contacts['name']);
        const validaddress=this.validateAddress(contacts['address']);
        const validcontact=this.validateContact(contacts['contact']);
        const validcountry=this.validateCountry(contacts['country']);
        if(validname&&validaddress&&validcontact&&validcountry)
        {
            AuthService.AddContacts(this.state.contacts).then((res)=>
            {
                if(res.request.status==201)
                {
                    this.props.history.push('./contactlist');
                }
            })
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
                    <li class="nav-item active">
                        <NavLink to="/contactlist" className="btn btn-primary">Contacts</NavLink>
                    </li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                    <li>
                            <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                            </li>
                    </ul>

            </nav>
                <MDBContainer>
            <MDBRow>
              <MDBCol md="10" style={{paddingTop:"50px",paddingLeft:"200px",paddingBottom:"50px"}}>
                <form className="card text-center bg-light" onSubmit={this.handleClick} noValidate autocomplete="off">
                <div className="card-header text-success"><h3>Add Contacts</h3></div>
                  <div className="card-body">
                  <div className="indigo-text text-left">
                    <MDBInput
                      label="Type your Name"
                      icon="user"
                      name="name"
                      type="text"
                      onBlur={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['name']}</span>
                    <MDBInput
                      label="Type Contact Number"
                      icon="mobile-alt"
                      name="contact"
                      type="number"
                      maxlength="10"
                      onBlur={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['contact']}</span>
                    <MDBInput
                      label="Type Present Address"
                      icon="address-book"
                      name="address"
                      type="text"
                      onBlur={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['address']}</span>
                    <MDBInput
                      label="Type Country Name"
                      icon="flag"
                      name="country"
                      type="text"
                      onBlur={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['country']}</span>
                    {/* <span className="text-danger">{this.state.errors['password']}</span> */}
                  </div>
                  {/* <span className="text-danger">{this.state.errors['finalerror']}</span> */}
                  <div className="text-center">
                    <MDBBtn type="submit">Save</MDBBtn>
                  </div>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </div>
        )
    }
}

export default addcontact
