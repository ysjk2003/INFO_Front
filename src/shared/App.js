import React, { Component } from 'react';
import './App.css';
import { Main, LoginContainer, Regist, CurriculumContainer, Assignment, BoardContainer, PostContainer, NavContainer } from 'pages';
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
        <Route exact path="/curriculum" component={CurriculumContainer}/>
        <Route path="/assignment" component={Assignment}/>
        <Route path="/curriculum/c" component={BoardContainer}/>
        <Route path="/curriculum/python" component={BoardContainer}/>
        <Route path="/curriculum/network" component={BoardContainer}/>
        <Route path="/Posting" component={PostContainer}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login : state
});

export default connect(mapStateToProps)(App);
