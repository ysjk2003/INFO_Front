import React, { Component } from 'react';
import logo from './info.png';
import MyName from './MyName'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-navbar">
          <img src={logo} className="App-logo"/>
        </div>
      </div>
    );
  }
}

export default App;
