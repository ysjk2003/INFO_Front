import React, { Component } from 'react';
import c from 'resource/c.png';
import network from 'resource/network.png';
import python from 'resource/python.png';
import './Curriculum.css';
import { Link, withRouter } from 'react-router-dom';

class Curriculum extends Component {
    state = {
        category: ''
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
                        <Link to={"curriculum/C"}><img src={c} alt="c" name="c"/></Link>
                    </div>
                    <div className='Python'>
                        <Link to={"curriculum/Python"}><img src={python} alt="python" name="python"/></Link>
                    </div>
                    <div className="Network">
                        <Link to={"/curriculum/Network"}><img src={network} alt="network" name="network"/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Curriculum);