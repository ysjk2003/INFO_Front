import React, { Component } from 'react';
import './Board.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from 'lib/cookie';

class Board extends Component {

    state = { 
        title :[
            { 
                title: "글이 없습니다.", 
                id: 0
            }
        ],
        curruntid: 0,
        currunttitle: '글이 없습니다.',
        curruntcontent: '글이 없습니다.',
        category: ''
    }

    jwt = 'Bearer ' + getCookie('JWT')

    componentWillReceiveProps(nextProps) {
        this.getTitle(nextProps);
    }

    getTitle = async (nextProps) => {
        try{
            const response = await axios.get(`http://infodsm.club:5000/post/${nextProps.subject}`,{
                headers: { Authorization: this.jwt }
            })
            this.setState({
                title: response.data,
                curruntid: response.data[0].id,
                currunttitle: response.data[0].title,
                curruntcontent: response.data[0].content
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    deletePost = async () => {
        try {
            const response = await axios.delete(`http://infodsm.club:5000/post/${this.state.category}/${this.state.curruntid}`,{
                headers: { Authorization: this.jwt }
            });
        }
        catch (err) {
            console.log(err)
            alert("삭제 실패")
        }
    }

    requestPost = async (e) => {
        try {
            const id = e.target.className
            console.log(id)
            const response = await axios.get(`http://infodsm.club:5000/post/${this.props.subject}/${id}`, {
                headers: {Authorization: this.jwt}
            })
            this.setState({
                curruntid: response.data[0].id,
                curruntcontent: response.data[0].content,
                currunttitle: response.data[0].title
            })
            console.log(response.data[0])
        }
        catch (err) {
            console.log(err)
            alert('오류가 발생했습니다.')
        }
    }

    render() {
        const { title } = this.state;

        const titlelist = title.map( title => (
            (<p className={title.id}>{title.title}</p>)
        ));
        return (
            <div>
                <div className="Board-wrapper">
                    <div className="Board">
                        <div className="Category">
                            <h2>Chapter 1</h2>
                            <p onClick={this.requestPost}>{ titlelist }</p>
                        </div>
                        <div className="Main">
                            <h1 className="Title">{this.state.currunttitle}</h1>
                            <p className="Text">{this.state.curruntcontent}</p>
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