import React, {Component} from 'react';
import logo from 'logo.png';

class Nav extends Component {
    render() {
        return (
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
        );
    }
}

export default Nav;