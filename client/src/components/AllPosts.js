import React, { Component } from 'react';
import {Container, Row, Col} from "reactstrap";
import Footer from './Footer';
import {  Button, FormGroup, Form, Input } from 'reactstrap';
import like from '../assets/images/like.png';
import dislike from '../assets/images/dislike.png';
import axios from 'axios'




class AllPosts extends Component {
  constructor() {
    super()
    this.state = {
        username:'John',
        title: 'Title',
        content:'djalkglklkgdamfkadafkalmmkemakmfkalewmflkmfklmksdmklfmkgeaklfdmssmdfmklvadmf ewlf weflk flkfmalflefallkmklamklmldmmfelmlskgkkalmklmvklamvkamvklmvklamvakddmfklamgk',
        comment:'',
        created:'',
        image:'images/Propic1.png',
        posts:[]
    }
    this.componentDidMount = ()=>{
      this.getAllPost();
    }

    this.getAllPost= () => {
      axios.get('http://localhost:3000/users/posts')
      .then((response) => {
        const data = response.data;
        this.setState({posts:data})
        console.log('Data has been received!');
      })
      .catch(()=>{
        alert('Error retrieving data!!');
    });
  }
}
    render () {
        return (
          <Container>

            <Row>

              <Col md="6" sm="12">
                <div className=" jumbotron mt-5">
                  <div className="row">
                    <div className="col-sm-3">
                      <img src={this.state.image} style={{"width": "50px","height":"auto"}}/>
                    </div>

                    <div className="col-sm-8">
                      <a className="mt-2 ml-2" href="/profile">{this.state.username}</a>
                      <small className="text-muted mx-3">Date</small>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-7">
                      <h2 className="text-left ml-3">{this.state.title}</h2>
                    </div>
                    <div className="col-sm-1">
                      <img src={like} className="like" title="like"/>
                    </div>
                    <div className="col-sm-1">
                      <img src={dislike} className="dislike" title="dislike"/>
                    </div>
                  </div>
                  <p className=" text-left ml-3" style={{"word-wrap": "break-word"}} >{this.state.content}</p>
                
                {/* comment box */}

                  <div className="row postBox mx-0 ">

                    <div className="row">
                        <div className="col-sm-8">
                          <a className="mt-2 ml-2 small" href="/profile">{this.state.username}</a>
                          <small className="text-muted mx-3">Date</small>
                        </div>
                    </div>
                    <div className="row col-sm-12" >
                      <p className=" text-left ml-3" style={{"word-wrap": "break-word"}} >Sample comment1</p>
                      <div className="divider"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                          <a className="mt-2 ml-2 small" href="/profile">{this.state.username}</a>
                          <small className="text-muted mx-3">Date</small>
                        </div>
                    </div>
                    <div className="row col-sm-12" >
                      <p className=" text-left ml-3" style={{"word-wrap": "break-word"}} >Sample comment2</p>
                      <div className="divider"></div>
                    </div>

                    {/* new comment */}

                    <div className="row col-sm-12 py-2 mx-0" >
                      <Form inline>
                        <FormGroup>
                          <Input type="textarea" name="text" id="NewComment" placeholder="New Comment"/>
                        </FormGroup>
                        <Button className="ml-1" color="secondary" size="sm">send</Button>
                      </Form>
                    </div>


                  </div>
                                
                </div>
              </Col>


              <Col md="6" sm="12">
                <div className=" jumbotron mt-5">
                  <div className="row">
                    <div className="col-sm-3">
                      <img src={this.state.image} style={{"width": "50px","height":"auto"}}/>
                    </div>

                    <div className="col-sm-8">
                      <a className="mt-2 ml-2" href="/profile">{this.state.username}</a>
                      <small className="text-muted mx-3">Date</small>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-7">
                      <h2 className="text-left ml-3">{this.state.title}</h2>
                    </div>
                    <div className="col-sm-1">
                      <img src={like} className="like" title="like"/>
                    </div>
                    <div className="col-sm-1">
                      <img src={dislike} className="dislike" title="dislike"/>
                    </div>
                  </div>
                  <p className=" text-left ml-3" style={{"word-wrap": "break-word"}} >{this.state.content}</p>
                
                {/* comment box */}

                  <div className="row postBox mx-0 ">

                    <div className="row">
                        <div className="col-sm-8">
                          <a className="mt-2 ml-2 small" href="/profile">{this.state.username}</a>
                          <small className="text-muted mx-3">Date</small>
                        </div>
                    </div>
                    <div className="row col-sm-12" >
                      <p className=" text-left ml-3" style={{"word-wrap": "break-word"}} >Sample comment1</p>
                      <div className="divider"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                          <a className="mt-2 ml-2 small" href="/profile">{this.state.username}</a>
                          <small className="text-muted mx-3">Date</small>
                        </div>
                    </div>
                    <div className="row col-sm-12" >
                      <p className=" text-left ml-3" style={{"word-wrap": "break-word"}} >Sample comment2</p>
                      <div className="divider"></div>
                    </div>

                    {/* new comment */}

                    <div className="row col-sm-12 py-2 mx-0" >
                      <Form inline>
                        <FormGroup>
                          <Input type="textarea" name="text" id="NewComment" placeholder="New Comment"/>
                        </FormGroup>
                        <Button className="ml-1" color="secondary" size="sm">send</Button>
                      </Form>
                    </div>


                  </div>
                                
                </div>
              </Col>
            </Row>
              




      
          <Footer />
          </Container>
           
        )
    }
}

export default AllPosts