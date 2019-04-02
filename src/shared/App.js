import React, { Component } from 'react';
import './App.css';
import { Main, Login, Regist, Curriculum, Assignment, Board, Post } from 'pages';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/regist" component={Regist}/>
        <Route exact path="/curriculum" component={Curriculum}/>
        <Route path="/assignment" component={Assignment}/>
        <Route path="/curriculum/c" component={Board}/>
        <Route path="/curriculum/python" component={Board}/>
        <Route path="/curriculum/network" component={Board}/>
        <Route path="/Posting" component={Post}/>
      </div>
    );
  }
}

export default App;
