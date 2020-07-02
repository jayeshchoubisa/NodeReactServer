import React, { Component } from 'react'
import url from './images/Logo.png';
import first from './images/first.jpg'
import second from './images/second.jpg';
import third from './images/third.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Shailendra from './images/shailendra-chauhan.jpg';
import Akhil from './images/Akhil.jpg';
import Menu from './menu';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
          <body className="bg-light">
            <Menu/>
            <div className="container" style={{paddingLeft:"50px"}}>
                <div className="row" style={{height:"50%"}}>
            <div className="col-12 bg-light h-50 d-inline-block">
              

                <Carousel>
  <Carousel.Item>
    <img
      className="img-responsive"
      src={first}
      alt="First slide"
      style={{width:"1100px",height:"500px"}}
    />
    <Carousel.Caption>
      
      <strong><h4 className="text-top"style={{color:"#ff0000"}}>Cell Phone Company share your contacts</h4></strong>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-responsive"
      src={second}
      alt="Second slide"
      style={{width:"1100px",height:"500px"}}
    />

    <Carousel.Caption>
      <strong><h3 >Contact must be private </h3>
      <p>This is our atmost priority</p></strong>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Carousel.Caption>
      <strong><h1 style={{color:"#ffffff"}}>Use Contact List</h1></strong>
    </Carousel.Caption>
    <img
      className="h-50 d-inline-block"
      src={third}
      alt="Third slide"
      style={{paddingLeft:"30px"}}
    />

    
  </Carousel.Item>
</Carousel>
</div>



                    </div>
                    <br/>
                        <div><h1>Our 6 Main Principles</h1></div>
                        <br/>
 <div className="card-columns">
  <div className="card bg-warning">
    <div className="card-body text-center">
      <h3 className="card-text">Save Records</h3>
    </div>
  </div>
  <div className="card bg-warning">
    <div className="card-body text-center">
      <h3 className="card-text">Privacy</h3>
    </div>
  </div>
  <div className="card bg-warning">
    <div className="card-body text-center">
      <h3 className="card-text">Sort Contacts</h3>
    </div>
  </div>
  <div className="card bg-warning">
    <div className="card-body text-center">
      <h3 className="card-text">Contacts with Images</h3>
    </div>
  </div>
  <div className="card bg-warning">
    <div className="card-body text-center">
      <h3 className="card-text">Edit Saved Records</h3>
    </div>
  </div>
  <div className="card bg-warning">
    <div className="card-body text-center">
      <h3 className="card-text">Delete Records</h3>
    </div>
  </div>
</div>
<br/>

<h1 className="text-success">Our Trusted Customers</h1><br/>

<div className="bg-dark">
<div className="card" style={{width: 400,display: "inline-block",marginRight:"50px"}}>
  <img className="card-img-top" src={Shailendra} alt="Card image" style={{height:"305px",width:"400px"}}/>
  <div className="card-body">
    <h4 className="card-title">Shailendra Chauhan</h4>
    <p className="card-text"><i>Cantact List is one of the trusted site to save contact,through ContactList you can edit your data anywhere anytime.</i></p>
  </div>
</div>
<div className="card" style={{width: 400 ,display:"inline-block",marginLeft:"225px"}}>
  <img className="card-img-top" src={Akhil} alt="Card image" style={{height:"305px",width:"400px"}}/>
  <div className="card-body">
    <h4 className="card-title">Akhil Raghava</h4>
    <p className="card-text"><i>Contact List doesn't share your data,it is the most protected website ,I have ever seen to save your contact records.</i></p>
  </div>
</div>
</div>
<div className="bg-light" style={{height:150,paddingTop:"30px"}}>
  <NavLink to="/signup"><h6 className="text-center">Not Registered Yet?</h6></NavLink>
   <NavLink to="/signup" className="btn btn-success btn-sm btn-block">
            Register Here...
            </NavLink>
</div>



            </div>
            </body>
        )
    }
}

export default Home
