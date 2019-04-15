import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import * as actions from '../actions'

class NavContainer extends Component {
    render() {
        return (
            <Nav login = {this.props.isLogin} IsLogin={this.props.IsLogin}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    IsLogin: (bool) => dispatch(actions.isLogin(bool))
});

const mapStateToProps = (state) => ({
    isLogin : state.login.isLogin
})

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)