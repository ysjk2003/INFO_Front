import React, { Component } from 'react';
import './Post.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromHTML, ContentState, convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { getCookie } from 'lib/cookie.js'
import { withRouter } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';

class Post extends Component {
    constructor(props) {
        super(props);
    
        let editorState;
    
        if (props.location.state.content) {
          const blocksFromHTML = convertFromHTML(props.location.state.content);
          const contentState = ContentState.createFromBlockArray(blocksFromHTML);
          editorState = EditorState.createWithContent(contentState);
          console.log(editorState)
        }
        else {
          editorState = EditorState.createEmpty();
        }
    
        this.state = { editorState };
    }

    componentWillMount() {
        if(!localStorage.getItem('isLogin')) {
            alert('로그인을 해주세요!')
            this.props.history.push('/')
        }
        if(this.props.location.state){
            this.setState({
                title: this.props.location.state.title,
                category: this.props.location.state.category
            })
        }
        this.setState({
            category: this.props.location.state.category
        })
    }

    state = {
        title: '',
        editorState: EditorState.createEmpty(),
        category: ''
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
        const { title, editorState, category } = this.state
        if (title === '') {
            alert("제목을 작성해 주세요!")
        }
        else if (editorState === '') {
            alert("본문을 작성해 주세요!!")
        }
        else {
            try {
                await axios.post('http://infodsm.club:5000/post/write',
                {
                    title: title, content: draftToHtml(convertToRaw(editorState.getCurrentContent())), category: category,
                },
                {
                    headers: { Authorization: this.jwt }
                });
                alert('글이 저장되었습니다.')
                this.props.history.push('/curriculum')
            }
            catch (err) {
                console.log(err)
                if (err.response) {
                    if(err.response.status === 500) {
                        alert('세션이 만료되었습니다.')
                        localStorage.clear();
                        this.props.history.push('/')
                    }
                }
                else {
                    alert('오류가 발생하였습니다.')
                }
            }
        }
    }

    modifyPost = async () => {
        try{
            await axios.put(`http://infodsm.club:5000/post/${this.state.category}/${this.props.location.state.id}`,
            {
                title: this.state.title,
                content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
            },
            {
                headers: { Authorization: this.jwt }
            });
            alert('글이 수정되었습니다.');
            this.props.history.push('/curriculum')
            console.log(this.state.editorState)
        }
        catch(err) {
            console.log(err)
            if (err.response) {
                if(err.response.status === 500) {
                    alert('세션이 만료되었습니다.')
                    localStorage.clear();
                    this.props.history.push('/')
                }
            }
            else {
                alert('오류가 발생하였습니다.')
            }
        }
    }

    render() {
        const { editorState } = this.state;
        if(window.location.href === "http://localhost:3000/Posting/modify") {
            return (
                <div>
                    <div className="wrapper-editor">
                        <input type="text" name='title' className="Post-title" placeholder="제목" onChange={this.handleChange} value={this.state.title}></input>
                        <Editor editorState={editorState} defaultEditorState={this.props.location.state.content} wrapperClassName="wrapper-class" onEditorStateChange={this.onEditorStateChange} editorClassName="editor-class" localization={{ locale: 'ko', }} toolbar={{image: {uploadCallback: this.uploadImageCallBack}}} />
                        <button type="submit" onClick={this.modifyPost} className="Save">저장</button>
                    </div>
                </div>
            )
        }
        else {
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
}

export default withRouter(Post);