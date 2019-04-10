import React, { Component } from 'react';
import Nav from 'pages/Nav';
import './Post.css';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

class Post extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    state = {
        title: '',
        text: ''
    }

    onClick = (e) => {
        axios.post('/posting')
    }

    render () {
        return (
            <div>
                <div className="wrapper-editor">
                    <input type="text" name='title' className="Post-title" placeholder="제목"></input>
                    <Editor name="text" wrapperClassName="wrapper-class" editorClassName="editor-class" localization={{locale: 'ko',}}/>
                    <button type="submit" className="Save">저장</button>
                </div>
            </div>
        )
    }
}

export default Post;