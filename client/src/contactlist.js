import React, { Component } from 'react'
import AuthService from './services/auth.services'
import {NavLink} from 'react-router-dom';
import {MDBInput} from 'mdbreact';

class contactlist extends Component {
    constructor(props) {
        super(props)
        const users=JSON.parse(localStorage.getItem('users'));
        this.state = {
           contacts:[],
           currentContact:{}      
        }
    }

    componentDidMount()
    {
        const users=JSON.parse(localStorage.getItem('users'));
        const id=users._id;
        AuthService.GetContacts(id).then((req,res)=>
        {
            this.setState({contacts:req.data});
        });
        
    }

    handleDelete=(item)=>
    {
        AuthService.DeleteContacts(item).then((res)=>
        {
            window.location.reload(false);
        });
    }

    handleEdit=(id)=>
    {
        console.log(id);
        this.props.history.push("/edit/"+id);
    }

    setCurrentContact=(item)=>{
        this.state.currentContact = item;
    }

    changeSearch=(event)=>
    {
        const users=JSON.parse(localStorage.getItem('users'));
        const id=users._id;
        console.log(event.target.value);
        if(event.target.value=="")
        {
            window.location.reload(false); 
        }
        else
        {
        AuthService.Search(event.target.value,id).then((res)=>
        {
            this.setState({contacts:res.data});
        });
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
                        <NavLink to="/addcontact" className="btn btn-primary">Add Contacts</NavLink>
                    </li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                    <li>
                            <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                            </li>
                    </ul>
            </nav>
            <div className=" card green-text text-left">
            <MDBInput
                      label="Search Here"
                      icon="search"
                      name="search"
                      type="text"
                      onChange={this.changeSearch}
                    />
                </div>
            <div>
                {this.state.contacts.length == 0 && (
                    <div>
                        <h3 className="text-center" style={{marginTop:"12%"}}>No contacts found</h3>
                    </div>
                )}
                {this.state.contacts.length>0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>SNO.</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Present Address</th>
                            <th>Country</th>
                            <th colspan="2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                {this.state.contacts.map((item,index) => {
                            return (
                                <tr key={item._id}>

                                    <td>{index+1}</td>  
                                    <td>{item.name}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.address}</td>
                                    <td>{item.country}</td>
                                    <td><button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onClick={()=>this.setCurrentContact(item)} style={{marginRight:"100px"}}>Delete</button>
                                    <button className="btn btn-success"onClick={()=>this.handleEdit(item._id)}>Edit</button></td>
                                </tr>
                            )
                        })
                        }
                </tbody>
                </table>
                )}
                
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={()=>this.handleDelete(this.state.currentContact)} class="btn btn-primary">Confirm Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default contactlist
