import React, { Component } from 'react'
import Login from '../component/Auth/Login';
import * as actions from '../actions';
import axios from 'axios';
import { setCookie } from 'lib/cookie';
import { connect } from 'react-redux';


class LoginContainer extends Component {

    state = {
        id: '',
        password: ''
    }

    onClick = async (e) => {
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
                this.props.IsLogin(true);
                const logflag = this.props.isLogin;
                localStorage.setItem('isLogin', logflag)
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
        return (
            <Login handleChange={this.handleChange} onClick={this.onClick}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    IsLogin: (bool) => dispatch(actions.isLogin(bool))
});

const mapStateToProps = (state) => ({
    isLogin: state.login.isLogin
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);