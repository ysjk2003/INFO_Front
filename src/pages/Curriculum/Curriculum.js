import React, { Component } from 'react';
import c from 'resource/c.png';
import network from 'resource/network.png';
import python from 'resource/python.png';
import './Curriculum.css';
import { Link } from 'react-router-dom';

class Curriculum extends Component {
    state = {
        subject: ''
    }
    
    handleChange = (e) => {
        this.state.subject = e.target.name
        this.props.SUBJECT(this.state.subject)
        console.log(this.state.subject)
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

export default Curriculum;