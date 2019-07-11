import React from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';

const Login = ({handleChange, onClick}) => {
    return (
        <div>
            <div className="Login">
                <h2>로그인</h2>
                <form>
                    <input type="text" name="id" className="Login-box" placeholder="ID" onChange={handleChange} required></input><br/>
                    <input type="password" name="password" className="Login-box" placeholder="Password" onChange={handleChange} required></input>
                    <p><Link to="/regist">회원가입</Link></p>
                    <button type="submit" className="Login-submit" onClick={onClick}>Login</button>
                </form>
            </div>
        </div>
    );
}


export default withRouter(Login);