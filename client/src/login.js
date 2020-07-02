import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import AuthService from './services/auth.services';
import Menu from './menu';
class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:{
                email:"",
                password:""
            },
            errors:{
                email:"",
                password:"",
                finalerror:""
            }
                 
        }
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
            this.state.errors['password']="Please enter the 8 character password";
            this.setState({errors});
            return false;
        }
        this.state.errors['password']="";

        return true;
    }


    changeHandler=(event)=>
    {
        this.state.errors['finalerror']="";
        const user=this.state.user;
        user[event.target.name]=event.target.value;
        if(event.target.name=="email")
        {
            this.validateEmail(event.target.value);
        }
        else if(event.target.name=="password")
        {
            this.validatePassword(event.target.value);
        }
        this.setState({user});
    }

    handleClick=(event)=>
    {
        event.preventDefault();
        console.log("satya");
        const user=this.state.user;
        const validemail=this.validateEmail(user['email']);
        const validpassword=this.validatePassword(user['password']);
        if(validemail&&validpassword)
        {
          console.log(this.state.user);
          AuthService.LoginUser(this.state.user).then((res) => {
            console.log(res.data);
            if (res.data.success == true) {
                const unknown = res.data.data;
                localStorage.setItem('users', JSON.stringify(unknown));
                    this.props.history.push('./userprofile');
        }
        else{
          const errors=this.state.errors;
          errors['finalerror']="Your username and password doesn't match";
            this.setState({errors});
        }
    });
}
    }



    render() {
        return (
            <MDBContainer>
                <Menu/>
            <MDBRow>
              <MDBCol md="10" style={{paddingTop:"100px",paddingLeft:"200px"}}>
                <form className="card text-center bg-light" onSubmit={this.handleClick} noValidate autocomplete="off">
                <div className="card-header text-success"><h3>Login</h3></div>
                  <div className="card-body">
                  <div className="indigo-text text-left">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      name="email"
                      type="email"
                      onBlur={this.changeHandler}
                    />
    <span className="text-danger">{this.state.errors['email']}</span>
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      name="password"
                      type="password"
                      onBlur={this.changeHandler}
                    />
                    <span className="text-danger">{this.state.errors['password']}</span>
                  </div>
                  <span className="text-danger">{this.state.errors['finalerror']}</span>
                  <div className="text-center">
                    <MDBBtn type="submit">Login</MDBBtn>
                  </div>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
         
        )
    }
}

export default login
