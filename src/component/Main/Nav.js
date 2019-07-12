import React from 'react';
import logo from 'resource/logo.png';
import { Link } from 'react-router-dom';
import './Nav.css'
import menu from 'resource/menu.svg';

const Nav = ({logout, isLogin}) => {
    return (
        <div className="App-navbar">
        <img src={logo} alt="Info" className="App-logo"/>
        <label className="nav_btn" htmlFor="toggle"><img src={menu} alt="menu" className="Menu-image"></img></label>
        <input type="checkbox" id="toggle" className="toggle"/>
        <div className="menu">
            <ul id="nav">
                <li id="nav-menu"><Link to="/">메인</Link></li>
                <li id="nav-menu"><Link to="/curriculum">커리큘럼</Link></li>
                <li id="nav-menu"><Link to="/assignment">부원모집</Link></li>
                {
                    isLogin ?
                    <li onClick={logout} id="nav-menu">로그아웃</li> :
                    <li id="nav-menu"><Link to="/login">로그인</Link></li>
                }
            </ul>
        </div>
    </div>
    )
}

export default Nav;