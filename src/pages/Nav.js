import React, {Component} from 'react';
import logo from 'resource/logo.png';
import { Link } from 'react-router-dom';
import './Nav.css'
import menu from 'resource/menu.svg';
import { deleteCookie } from 'lib/cookie.js'

class Nav extends Component {
    state={
        isLogin: false
    }
    logout = () => {
        this.props.IsLogin(false);
        localStorage.clear();
        this.setState({
            isLogin : false
        })
        deleteCookie('JWT');
    }

    componentWillMount() {
        this.setState({
            isLogin: localStorage.getItem('isLogin')
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.login !== prevProps.login) {
            this.setState({
                isLogin: this.props.login
            })
        }
        if(this.state.isLogin !== prevState.isLogin) {
            this.setState({
                isLogin: this.state.isLogin
            })
        }
    }
    

    render() {
        const logged = localStorage.getItem('isLogin')
        const {isLogin} = this.state;
        return (
            <div className="App-navbar">
                <img src={logo} className="App-logo"/>
                <label className="nav_btn" for="toggle"><img src={menu}className="Menu-image"></img></label>
                <input type="checkbox" id="toggle" className="toggle"/>
                <div className="menu">
                    <ul id="nav">
                        <li><Link to="/">메인</Link></li>
                        <li><Link to="/curriculum">커리큘럼</Link></li>
                        <li><Link to="/assignment">과제제출</Link></li>
                        {
                            isLogin ?
                            <li onClick={this.logout}>로그아웃</li> :
                            <li><Link to="/login">로그인</Link></li>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;