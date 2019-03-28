import React, {Component} from 'react';
import logo from 'resource/logo.png';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="App-navbar">
                <img src={logo} className="App-logo"/>
                <div className="menu">
                    <ul>
                        <li><Link to="/">메인</Link></li>
                        <li><Link to="/curriculum">커리큘럼</Link></li>
                        <li><Link to="/assignment">과제제출</Link></li>
                        <li><Link to="/login">로그인</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;