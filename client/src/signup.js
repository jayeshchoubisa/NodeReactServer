import React, { Component } from 'react'
import telephone from "./images/telephone.jpg";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,} from 'mdbreact';
import AuthService from './services/auth.services';
import Menu from './menu';

class signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formFields:{
                name:'',
                email:'',
                password:'',
                contact:'',
                address:''
            },
             errors:{
               name:"",
               address:"",
               contact:"",
               password:"",
               email:""
             }   
        }
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

    validateEmail(email)
    {
      console.log("email");
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const errors=this.state.errors;
      if(email=="")
      {
        this.state.errors['email']="Please enter the email";
          this.setState({errors});
          return false; 
      }
      else if(!(email.match(mailformat)))
      {
        this.state.errors['email']="Please enter the valid email format";
          this.setState({errors});
          return false; 
      }
      this.state.errors['email']="";
      return true;
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

    validatePassword(password)
    {
      var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const errors=this.state.errors;
        if(password=="")
        {
            this.state.errors['password']="Please enter the password";
            this.setState({errors});
            return false;
        }
        else if(!(password.match(decimal)))
        {
            this.state.errors['password']="Please enter atleast one upercase letter,small letter numeric,special character,atleast 8 digit";
            this.setState({errors});
            return false;
        }
        this.state.errors['password']="";

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

    changeHandler=(event)=>
    {
        const formFields=this.state.formFields;
        formFields[event.target.name]=event.target.value;
        console.log(event.target.value);
        if(event.target.name=="name")
        {
            this.validateName(event.target.value);
        }
        else if(event.target.name=="email")
        {
          this.validateEmail(event.target.value);
        }
        else if(event.target.name=="password")
        {
            this.validatePassword(event.target.value);
        }
        else if(event.target.name=="contact")
        {
            this.validateContact(event.target.value);
        }
        else if(event.target.name=="address")
        {
            this.validateAddress(event.target.value);
        }
        this.setState({formFields});
    }

    handleClick=event=>
    {
        event.preventDefault();
        const formFields=this.state.formFields;
        const validname=this.validateName(formFields['name']);
        const validpassword=this.validatePassword(formFields['password']);
        const validcontact=this.validateContact(formFields['contact']);
        const validaddress=this.validateAddress(formFields['address']);
        const validateemail=this.validateEmail(formFields['email']);
        if(validname&&validcontact&&validpassword&&validaddress&&validateemail)
        {
          AuthService.SignUpUser(this.state.formFields).then((res) => {
            console.log(res.data);
            console.log(res.status);
            if(res.status==201)
            {
                window.location.href='/login';
            }
    });
        }
    }

    render() {
        return (
            <body style={{backgroundColor:"black"}}>
            <MDBContainer style={{backgroundColor:"black"}}>
              <Menu/>
                <MDBRow>
                    <MDBCol md="5"  style={{paddingTop:"30px"}}>
                    <img src={telephone} className="img-fluid" style={{height:"589px",width:"1200px"}}/>
                        </MDBCol>
        <MDBCol md="7" style={{paddingTop:"30px",paddingLeft:"60px",paddingBottom:"30px"}}>
          <form className="card" className="needs-validation" onSubmit={this.handleClick} noValidate autocomplete="off">
          <div class="card-header text-center text-primary"><h3>SignUp</h3></div>
          <div className="card-body">
            <div className="text-left indigo-text pr-3" style={{marginLeft:"10px"}}>
            <MDBInput style={{color:"white"}}
                label="Your name"
                icon="user"
                className="form-control"
                onBlur={this.changeHandler}
                group
                name="name"
                type="text"
              />
            <span className="text-danger">{this.state.errors['name']}</span>
              <MDBInput style={{color:"white"}}
                icon="envelope"
                label="Your email"
                className="form-control"
                onBlur={this.changeHandler}
                group
                name="email"
                type="email"
              />
              <span className="text-danger">{this.state.errors['email']}</span>
              <MDBInput style={{color:"white"}}
                label="Your password"
                onBlur={this.changeHandler}
                icon="lock"
                group
                className="form-control"
                name="password"
                type="password"
              />
              <span className="text-danger">{this.state.errors['password']}</span>
              <MDBInput style={{color:"white"}}
                label="Your contact"
                icon="mobile-alt"
                className="form-control"
                onBlur={this.changeHandler}
                group
                name="contact"
                type="number"
              />
              <span className="text-danger">{this.state.errors['contact']}</span>
              <MDBInput style={{color:"white"}}
                label="Your Presnt address"
                icon="address-book"
                className="form-control"
                onBlur={this.changeHandler}
                group
                name="address"
                type="text"
              />
              <span className="text-danger">{this.state.errors['address']}</span>
            </div>


            <div className="text-center">
              <MDBBtn color="primary" type="submit">Register</MDBBtn>
            </div>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </body>
        )
    }
}

export default signup
