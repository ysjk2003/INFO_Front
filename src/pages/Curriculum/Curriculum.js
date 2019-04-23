import React, { Component } from 'react';
import c from 'resource/c.png';
import network from 'resource/network.png';
import python from 'resource/python.png';
import './Curriculum.css';
import { Link, withRouter } from 'react-router-dom';

class Curriculum extends Component {
    state = {
        subject: ''
    }
    
    handleChange = async (e) => {
        const name = e.target.name
        await this.setState({
            subject : name
        });
        this.props.setSubject(name)
    }

    componentWillMount() {
        if(!localStorage.getItem('isLogin')) {
            alert('로그인을 해주세요!')
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className="Sub">
                    <div className="C">
                        <Link to="/curriculum/c"><img src={c} alt="c" name="c" onClick={this.handleChange}/></Link>
                    </div>
                    <div className='Python'>
                        <Link to="/curriculum/python"><img src={python} alt="python" name="python" onClick={this.handleChange}/></Link>
                    </div>
                    <div className="Network">
                        <Link to="/curriculum/network"><img src={network} alt="network" name="network" onClick={this.handleChange}/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Curriculum);