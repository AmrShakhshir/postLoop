import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jwt_decode from 'jwt-decode';

export default class ProfileUpdate extends Component{
    constructor() {
        super()
        this.state = {
            username:'',
            email: '',
            image:'images/Propic1.png'
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.identity.username,
            email: decoded.identity.email
        })
    }
    change= e=>{
        this.setState({
          [e.target.name]:e.target.value
           })
          }

    onClick(){
    
        console.log('you clicked me')
    }

    render() {
        return (
            <div>
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">PROFILE</h1>
                </div>

                <div className="col-sm-8 mx-auto">
                    <img src={this.state.image} style={{ width:'15%',height:'auto', border:'solid 1px lightgrey'}} title={this.state.username}/> 
                </div>  
                <br></br>  

                <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td onChange={this.change}>{this.state.username} </td>
                            </tr>
                            <tr>
                            <td>Email</td>
                            <td>
                                <Input type="email" name="newEmail" id="newEmail" placeholder={this.state.email} />
                            </td>
                            </tr>
                            <tr>
                            <td>Password</td>
                            <td>
                                <Input type="password" name="newPassword" id="newPassword" placeholder="new password" />                        </td>
                            </tr>
                            <tr>
                            <td>Confirm Password</td>
                            <td>
                                <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" />                        </td>
                            </tr>
                            <tr>
                            <td></td>
                            <td>
                                <Button outline color="secondary" size="sm" onClick={this.props.clickMe}>update</Button>
                            </td>
                            </tr>
                        

                        </tbody>
                    </table>
                  </div>
        )
    }
}