import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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

    async onClick(e) {
        e.preventDefault();
        if (this.state.id === '') {
            alert("아이디를 입력하세요")
        }
        else if (this.state.password === '') {
            alert("패스워드를 입력하세요")
        }
        else if (this.state.name === '') {
            alert("이름을 입력하세요")
        }
        else {
            try {
                await axios.post('http://infodsm.club:5000/account/register', {
                    id: this.state.id, pw: this.state.password, name: this.state.name
                })
                alert("회원가입 성공")
                this.props.history.push('/')
            }
            catch(err) {
                alert("회원가입 실패")
            }
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <h2>회원가입</h2>
                    <form>
                        <input type="text" name="id" className="Login-box" placeholder="ID" onChange={this.handleChange} required></input><br/>
                        <input type="password" name="password" className="Login-box" placeholder="Password" onChange={this.handleChange} required></input><br/>
                        <input type="text" name="name" className="Login-box" placeholder="Name" onChange={this.handleChange} required></input>
                        <button type="submit" className="Regist-submit" onClick={this.onClick}>Regist</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default withRouter(Regist);