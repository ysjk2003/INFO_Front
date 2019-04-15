import React, { Component } from 'react'
import Curriculum from '../Curriculum/Curriculum';
import * as actions from '../../actions';
import { connect } from 'react-redux';


class CurriculumContainer extends Component {
    render() {
        return (
            <Curriculum SUBJECT={this.props.SUBJECT} subject={this.props.subject}/>
        )
    }
}

const mapStateToProps = (state) => ({
    subject: state.subject.subject
});

const mapDispatchToProps = (dispatch) => ({
    SUBJECT: (subject) => dispatch(actions.subject(subject))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumContainer);