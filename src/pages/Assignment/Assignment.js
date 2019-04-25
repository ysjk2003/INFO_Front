import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Assignment.css'

class Assignment extends Component {

    componentWillMount() {
        alert('신입부원 모집 기간이 아닙니다');
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <div className="Submit">
                    <h2>과제제출</h2>
                    <select className="Select">
                        <option value="">과목선택</option>
                        <option value="C">C</option>
                        <option value="Python">Python</option>
                        <option value="Network">Network</option>
                    </select>
                    <input type="text" className="Subject" placeholder="제목" required></input><br/>
                    <input type="file" className="File" required></input><br/>
                    <input type="submit" className="Submit-button"></input>
                </div>
            </div>
        )
    }
}

export default withRouter(Assignment);