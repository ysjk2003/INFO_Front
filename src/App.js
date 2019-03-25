import React, { Component } from 'react';
import logo from './info.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-navbar">
          <img src={logo} className="App-logo"/>
          <div className="menu">
            <ul>
              <li>메인</li>
              <li>커리큘럼</li>
              <li>과제제출</li>
              <li>로그인</li>
            </ul>
          </div>
        </div>
        <div className="Introduce">
          <img src={logo} className="Logo"/>
          <div className="Introduce-text">
            <h2>동아리 소개</h2>
            <p>INFO 동아리는 대덕소프트웨어마이스터고등학교에서 정보보안에 관심있는 학생들의 Long run을 위한 기반지식 습득 가이드라인을 제작하는 동아리입니다.</p>
          </div>
          <div>
            <h2>동아리원 소개</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
