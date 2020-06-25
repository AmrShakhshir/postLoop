import React,{ Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import AllPosts from './components/AllPosts'
import Post from './components/Post'
import GetPosts from './components/GetPosts'
import Myposts from './components/Myposts'








function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component = {Landing} />
        <Route exact path ="/AllPosts" component = {AllPosts} />          
        <div className = "container">
          <Route exact path ="/register" component = {Register} />
          <Route exact path ="/login" component = {Login} />
          <Route exact path ="/profile" component = {Profile} />
          <Route exact path ="/post" component = {Post} />
          <Route exact path ="/allpost" component = {GetPosts} />
          <Route exact path ="/mypost" component = {Myposts} />

        </div>
      </div>

    </Router>


  );
}

export default App;
