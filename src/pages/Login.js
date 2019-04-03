import React, { Component } from 'react';
import './Login.css';
import Nav from "pages/Nav";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    state = {
        id: '',
        password: ''
    }

    onClick() {
        axios.post('10.156.146.148:5000/account/login', {
            id: this.state.id, password: this.state.password
        })
        .then(response => {
            alert(response);
        })
        .catch(alert("다시 시도해 주세여.."))
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

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
                        <input type="text" name="id" className="Login-box" placeholder="ID" onChange={this.handleChange} required></input><br/>
                        <input type="text" name="password" className="Login-box" placeholder="Password" onChange={this.handleChange} required></input>
                        <p style={style}><Link to="/regist">회원가입</Link></p>
                        <button type="submit" className="Login-submit" onClick={this.onClick}>Login</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Login;