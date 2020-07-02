import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import AuthService from './services/auth.services';

class edit extends Component {
    constructor(props) {
        super(props)
        this.state = {

            contacts:{
                name:"",
                country:"",
                address:"",
                contact:""
            },
            errors:{
                name:"",
                address:"",
                country:"",
                contact:""
            }         
        }
    }

    componentDidMount()
    {
        const id=this.props.match.params.id;
        AuthService.EditContacts(id).then((res)=>
            {
                    this.setState({contacts:res.data});
            })
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
            this.state.errors['contact']="Please enter the valid contact number";
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
            AuthService.UpdateContacts(this.state.contacts).then((res)=>
            {
                if(res.request.status==201)
                {
                    window.location.href="../contactlist";
                }
            })
        }
    }

    render() {
        return (
            <MDBContainer>
            <MDBRow>
              <MDBCol md="10" style={{paddingTop:"50px",paddingLeft:"200px",paddingBottom:"50px"}}>
                <form className="card text-center bg-light" onSubmit={this.handleClick} noValidate autocomplete="off">
                <div className="card-header text-success"><h3>Edit Contacts</h3></div>
                  <div className="card-body">
                  <div className="indigo-text text-left">
                    <MDBInput
                      label="Type your Name"
                      icon="user"
                      value={this.state.contacts['name']}
                      name="name"
                      type="text"
                      onChange={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['name']}</span>
                    <MDBInput
                      label="Type Contact Number"
                      icon="mobile-alt"
                      value={this.state.contacts['contact']}
                      name="contact"
                      type="text"
                      onChange={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['contact']}</span>
                    <MDBInput
                      label="Type Present Address"
                      icon="address-book"
                      name="address"
                      value={this.state.contacts['address']}
                      type="text"
                      onChange={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['address']}</span>
                    <MDBInput
                      label="Type Country Name"
                      icon="flag"
                      value={this.state.contacts['country']}
                      name="country"
                      type="text"
                      onChange={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['country']}</span>
                    {/* <span className="text-danger">{this.state.errors['password']}</span> */}
                  </div>
                  {/* <span className="text-danger">{this.state.errors['finalerror']}</span> */}
                  <div className="text-center">
                    <MDBBtn type="submit">Update</MDBBtn>
                  </div>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
            
        )
    }
}

export default edit
