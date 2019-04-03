import React, { Component } from 'react';
import Nav from 'pages/Nav';
import axios from 'axios';

class Regist extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    state = {
        id: '',
        password: '',
        name: ''
    }

    onClick() {
        axios.post('/register', {
            id: this.state.id, password: this.state.password, name: this.state.name
        })
        .then(response => {
            console.log(response);
        })
        .catch(alert("다시 시도해 주세요.."))
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="Login">
                    <h2>회원가입</h2>
                    <form>
                        <input type="text" name="id" className="Login-box" placeholder="ID" onChange={this.handleChange} required></input><br/>
                        <input type="text" name="password" className="Login-box" placeholder="Password" onChange={this.handleChange} required></input><br/>
                        <input type="text" name="name" className="Login-box" placeholder="Name" onChange={this.handleChange} required></input>
                        <button type="submit" className="Regist-submit" onClick={this.onClick}>Regist</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Regist;