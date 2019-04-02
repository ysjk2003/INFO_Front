import React, { Component } from 'react';
import Nav from 'pages/Nav';
import './Post.css';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Post extends Component {
    render () {
        return (
            <div>
                <Nav />
                <div className="wrapper-editor">
                    <Editor wrapperClassName="wrapper-class" editorClassName="editor-class" localization={{locale: 'ko',}}/>
                    <button type="submit" className="Save">저장</button>
                </div>
            </div>
        )
    }
}

export default Post;