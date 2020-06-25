import React, { Component, useEffect } from 'react';
import {Container, Row, Col} from "reactstrap";
import Footer from './Footer';
import { Button, Form,  Input} from 'reactstrap';
import jwt_decode from 'jwt-decode';
import axios from 'axios';



export default  class AllPosts extends Component {
  constructor() {
    super()
    this.state = {
        'email':'',
        //'newemail':[],
        'username':'',
        'title':'',
        'content':'',
        'category':'',
        'image':'images/Propic1.png',
        'file':'',
         posts:[],

    }
    
}

    componentDidMount () {
        // window.addEventListener('load',this.getMyPost());
        // useEffect(() => this.getMyPost, []);
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            email: decoded.identity.email,
            username: decoded.identity.username

           // newemail: JSON.parse(JSON.stringify(this.state.email))

        })
        
    }

    getMyPost = (e) => {
        axios.post('http://localhost:3000/get_post', {            
                email:this.state.email
            },{
            headers:{
                authorization:'usertoken'
            },
            
        }).then((response) => {
            console.log(response);
            this.setState({posts:response.data})
            console.log('Data has been received!');
            this.getAllPost()

          })
          .catch((error)=>{
           // alert('Error retrieving data!!');
           console.log('No Data')
           console.log(error.response);
           console.log('State',this.state);
           
        });
    }
    

    
   


    displayMyPost = (posts) =>{
        if(!posts.length) return null;

        return posts.map((posts,index)=>(
            <div key={index}>{posts.title}
            {posts.content}
            {posts.category}</div>

        ));
    }


    
    render () {
        // this.getMyPost()
        if (this.state.posts[0] ===undefined)
        {
            return(
                    
                <div>
                    <div> No Posts to show </div>
                </div>
            )
        }

            console.log('render started!!!')
            console.log('State',this.state);
            //console.log(JSON.parse(JSON.stringify(this.state.email)))
            return (
               
                <div>
                    <div> hallo from mypost </div>
                    <div className="blog mt-5">
                        Here is your post:  {this.displayMyPost(this.state.posts)}
                    </div>
                
                </div>
            
            )
        }
            
    }