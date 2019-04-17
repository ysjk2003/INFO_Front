import React, { Component } from 'react'
import Curriculum from '../Curriculum/Curriculum';
import * as actions from '../../actions';
import { connect } from 'react-redux';


class CurriculumContainer extends Component {
    render() {
        return (
            <Curriculum subject={this.props.subject} setSubject={this.props.setSubject}/>
        )
    }
}

const mapStateToProps = (state) => ({
    subject: state.subject.subject
});

const mapDispatchToProps = (dispatch) => ({
    setSubject: (subject) => dispatch(actions.subject(subject))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumContainer);