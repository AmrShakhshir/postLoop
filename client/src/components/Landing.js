import React, { Component } from 'react'
import Slider from './SlideShow'
import Footer from './Footer'
import {Row} from "reactstrap";
import { Link } from 'react-router-dom'





export default class Landing extends Component {
    render() {
        return (
            <div className="container w-100">
                <Row className="slogan justify-content-md-center py-3 ">
                    <div >
                        <p>"<b>Sharing</b> is <b>Learning</b>"</p>   
                    </div>            
                </Row>

                <Slider/> 

                
                <Row className="justify-content-md-center pt-2 ">
                    <div >
                        <p>Still no account?</p>   
                    </div>            
                </Row>
                <Row className="justify-content-md-center ">
                    <div >
                        <Link to="/register" style={{"fontWeight": "bold"}}>register here</Link>
                    </div>            
                </Row>  
                <br></br>
                <Footer />
            </div>
        )
    }
}
