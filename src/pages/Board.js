import React, { Component } from 'react';
import Nav from 'pages/Nav';
import './Board.css'
import { Link } from 'react-router-dom';

class Board extends Component {
    state = {
        title : [
            "What is C?",
            "What is Complier?"
        ]
    }

    render() {
        const { title } = this.state;

        const titlelist = title.map( title => (
            (<p>{title}</p>)
        ));
        return (
            <div>
                <Nav />
                <div className="Board-wrapper">
                    <div className="Board">
                        <div className="Category">
                            <h2>Chapter 1</h2>
                            <p>{ titlelist }</p>
                        </div>
                        <div className="Main">
                            <h1 className="Title">Title</h1>
                            <p className="Text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <Link to="/Posting"><button type="submit" className="Create-Button">글쓰기</button></Link>
                </div>
            </div>
        );
    }
}

export default Board;