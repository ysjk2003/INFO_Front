import React, { Component } from 'react';
import Nav from 'pages/Nav'
import c from 'c.png';
import network from 'network.png';
import python from 'python.png';
import './Curriculum.css'

class Curriculum extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="Sub">
                    <div className="C">
                        <img src={c}/>
                    </div>
                    <div className='Python'>
                        <img src={python}/>
                    </div>
                    <div className="Network">
                        <img src={network}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Curriculum;