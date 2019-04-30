import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Assignment.css'
import axios from 'axios';

class Assignment extends Component {

    state = {
        name: '',
        number: '',
        options: ''
    }

    componentWillMount() {
        alert('신입부원 모집기간이 아닙니다.')
        this.props.history.go(-1)
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
        console.log(e.target.value)
    }

    sendData = async () => {
        try{
            await axios.post('http://infoclub.dsm:5000/assignment', {
                name: this.state.name,
                number: this.state.number,
                options: this.state.options
            })
        }
        catch(err) {
            console.log(err)
            alert("오류")
        }
    }

    render () {
        return (
            <div>
                <div className="Submit">
                    <h2>동아리 지원서</h2>
                    <input type="text" className="Textbox" name="name" placeholder="학번" onClick={this.handleChange} required/><br/>
                    <input type="txte" className="Textbox" name="number" placeholder="이름" onClick={this.handleChange} required/><br/>
                    <textarea type="text" className="Text" name="options" placeholder="하고싶은 말(Option)" onClick={this.handleChange}/><br/>
                    <button className="Submit-button" onClick={this.sendData}>제출</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Assignment);