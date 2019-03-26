import React, { Component } from 'react';
import './App.css';
import { Main, Login } from 'pages';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
