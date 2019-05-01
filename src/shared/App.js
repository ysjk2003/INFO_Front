import React, { Component } from 'react';
import './App.css';
import { Main, LoginContainer, Regist, Assignment, Board, Post, NavContainer, Curriculum } from 'pages';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer login = {this.props.login}/>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/regist" component={Regist}/>
        <Route exact path="/curriculum" component={Curriculum}/>
        <Route path="/assignment" component={Assignment}/>
        <Route path="/curriculum/:category" component={Board}/>
        <Route path="/Posting" component={Post}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login : state
});

export default connect(mapStateToProps)(App);
