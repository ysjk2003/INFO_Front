import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';
import * as actions from '../../actions'

class PostContainer extends Component {
    render() {
        return(
            <Post subject={this.props.subject}/>
        )
    }
}

const mapStateToProps = (state) => ({
    subject: state.subject.subject
});

const mapDispatchToProps = (dispatch) => ({
    SUBJECT: (subject) => dispatch(actions.subject(subject))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);