import React, { Component } from 'react';
import './Board.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from 'lib/cookie';

class Board extends Component {
    state = {
        title : [
            "What is C?",
            "What is Complier?"
        ],
        category: '',
        id: 0
    }

    jwt = 'Bearer ' + getCookie('JWT')

    async componentWillMount() {
        this.state.category = this.props.subject
        const response = await axios.get(`http://infodsm.club:5000/post/${this.state.category}`,{
            headers: { Authorization: this.jwt }
        })
    }

    deletePost = async () => {
        try {
            const response = await axios.delete(`http://infodsm.club:5000/post/${this.state.category}/${this.state.id}`,{
                headers: { Authorization: this.jwt }
            });
        }
        catch (err) {
            console.log(err)
            alert("삭제 실패")
        }
    }

    render() {
        const { title } = this.state;

        const titlelist = title.map( title => (
            (<p>{title}</p>)
        ));
        return (
            <div>
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
                    <div className="Buttons">
                        <Link to="/Posting"><button type="submit" className="Create-Button">글쓰기</button></Link>
                        <button type="submit" className="Modify-button">수정</button>
                        <button type="submit" onClick={this.deletePost} className="Delete-button">삭제</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;