import React, { Component } from 'react';
import Nav from 'pages/Nav';

class Board extends Component {
    render() {
        return (
            <div>
                <Nav />
                <form>
                    <input type="text"></input>
                </form>
            </div>
        );
    }
}

export default Board;