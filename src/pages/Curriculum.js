import React, { Component } from 'react';
import Nav from 'pages/Nav'
import c from 'resource/c.png';
import network from 'resource/network.png';
import python from 'resource/python.png';
import './Curriculum.css';
import { Link } from 'react-router-dom';

class Curriculum extends Component {
    render() {
        return (
            <div>
                <div className="Sub">
                    <div className="C">
                        <Link to="/curriculum/c"><img src={c}/></Link>
                    </div>
                    <div className='Python'>
                        <Link to="/curriculum/python"><img src={python}/></Link>
                    </div>
                    <div className="Network">
                        <Link to="/curriculum/network"><img src={network}/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Curriculum;