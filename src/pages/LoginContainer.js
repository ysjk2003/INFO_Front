import React, { Component } from 'react'
import Login from './Login';
import * as actions from '../actions';
import { connect } from 'react-redux';


class LoginContainer extends Component {
    render() {
        return (
            <Login IsLogin = {this.props.IsLogin}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    IsLogin: (bool) => dispatch(actions.isLogin(bool))
});


export default connect(null, mapDispatchToProps)(LoginContainer);