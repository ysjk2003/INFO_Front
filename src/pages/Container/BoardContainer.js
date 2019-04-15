import React, { Component } from 'react';
import Board from '../Board/Board';
import { connect } from 'react-redux';

class BoardContainer extends Component {
    render() {
        return(
            <Board subject={this.props.subject}/>
        )
    }
}

const mapStateToProps = (state) => ({
    subject: state.subject.subject
});

export default connect(mapStateToProps)(BoardContainer);