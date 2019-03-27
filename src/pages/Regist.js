import React, { Component } from 'react';
import Nav from 'pages/Nav';

class Regist extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="Login">
                    <h2>회원가입</h2>
                    <form>
                        <input type="text" className="Login-box" placeholder="ID" required></input><br/>
                        <input type="text" className="Login-box" placeholder="Password" required></input><br/>
                        <input type="text" className="Login-box" placeholder="Name"></input>
                        <button type="submit" className="Regist-submit">Regist</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Regist;