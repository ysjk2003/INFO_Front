import React, { Component } from 'react';
import './App.css';
import { Main, Login, Regist, Curriculum } from 'pages';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/regist" component={Regist}/>
        <Route path="/curriculum" component={Curriculum}/>
      </div>
    );
  }
}

export default App;
