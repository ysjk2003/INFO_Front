import React, { Component } from 'react';
import './Login.css';
import Nav from "pages/Nav";
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { setCookie } from 'lib/cookie';
import { PropTypes } from 'prop-types';

class Login extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    state = {
        id: '',
        password: ''
    }

    async onClick (e) {
        e.preventDefault();
        if (this.state.id === ''){ 
            alert("아이디를 입력하세요")
        }
        else if (this.state.password === '') {
            alert("비밀번호를 입력하세요")
        }
        else {
            try {
                const response = await axios.post('http://infodsm.club:5000/account/login', {
                    id: this.state.id, pw: this.state.password
                })
                alert('로그인 성공')
                this.props.IsLogin(true)
                setCookie('JWT', response.data.access_token)
                this.props.history.push('/')
            }
            catch (err) {
                alert('로그인 실패')
                console.log(err)
            }
        }
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
                <div className="Login">
                    <h2>로그인</h2>
                    <form>
                        <input type="text" name="id" className="Login-box" placeholder="ID" onChange={this.handleChange} required></input><br/>
                        <input type="password" name="password" className="Login-box" placeholder="Password" onChange={this.handleChange} required></input>
                        <p style={style}><Link to="/regist">회원가입</Link></p>
                        <button type="submit" className="Login-submit" onClick={this.onClick}>Login</button>
                    </form>
                </div>
            </div>
        );
    };
}


export default withRouter(Login);