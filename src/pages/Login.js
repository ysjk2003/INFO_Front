import React, { Component } from 'react';
import './Login.css';
import Nav from "pages/Nav";
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        const style = {
            'text-align': 'center'
        }
        return (
            <div>
                <Nav />
                <div className="Login">
                    <h2>로그인</h2>
                    <form>
                        <input type="text" className="Login-box" placeholder="ID" required></input><br/>
                        <input type="text" className="Login-box" placeholder="Password" required></input>
                        <p style={style}><Link to="/regist">회원가입</Link></p>
                        <button type="submit" className="Login-submit">Login</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Login;