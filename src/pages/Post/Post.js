import React, { Component } from 'react';
import './Post.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { getCookie } from 'lib/cookie.js'
import { withRouter } from 'react-router-dom';

class Post extends Component {
    state = {
        title: '',
        editorState: EditorState.createEmpty(),
        category: ''
    }

    componentWillMount() {
        this.state.category = this.props.subject
    }

    jwt = 'Bearer ' + getCookie('JWT')

    handleChange = (e) => {
        this.setState({
            title : e.target.value
        })
    }

    uploadImageCallBack = async (file) => {
        try{
            const response = await axios.post('http://infodsm.club:5000/image',{
                headers: { Authorization: this.jwt }
            },
            {
                data: file
            });

        }
        catch (err) {
            console.log(err)
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
        console.log(this.state.editorState.getCurrentContent().getPlainText())
    };

    onClick = async (e) => {
        const { title, editorState } = this.state
        if (title === '') {
            alert("제목을 작성해 주세요!")
        }
        else if (editorState === '') {
            alert("본문을 작성해 주세요!!")
        }
        else {
            try {
                const response = await axios.post('http://infodsm.club:5000/post/write',
                {
                    title: title, content: editorState.getCurrentContent().getPlainText(), category: this.state.category,
                },
                {
                    headers: { Authorization: this.jwt }
                });
                alert('글이 저장되었습니다.')
                this.props.history.push('/')
            }
            catch (err) {
                console.log(err)
                alert("오류가 발생하였습니다.")
                console.log(this.state.category)
            }
        }
    }

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <div className="wrapper-editor">
                    <input type="text" name='title' className="Post-title" placeholder="제목" onChange={this.handleChange}></input>
                    <Editor editorState={editorState} wrapperClassName="wrapper-class" onEditorStateChange={this.onEditorStateChange} editorClassName="editor-class" localization={{ locale: 'ko', }} toolbar={{image: {uploadCallback: this.uploadImageCallBack}}} />
                    <button type="submit" onClick={this.onClick} className="Save">저장</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Post);