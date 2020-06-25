import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../assets/images/MLwhite.png';

class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User Account
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/post" className="nav-link">
                        New Post
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Allpost" className="nav-link">
                        All Post
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/mypost" className="nav-link">
                        MyPosts
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div>
                    <Link to="/" className="nav-link" >
                        <img src={logo} alt="Logo" title="Home" style={{height: "50px",with: "50px"}}/>                  
                    </Link>
                </div>
                


                <div className="collapse navbar-collapse justify-content-md-start"
                    id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/AllPosts" className="nav-link">
                                Posts
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>

                <div>
                    <div className="search justify-content-md-end mr-4">
                            <Link to="#">   
                            <img className="searchImg" src={require ('../assets/images/search.png')} title={"search"} alt={"search"}/></Link>
                    </div>                    

                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)