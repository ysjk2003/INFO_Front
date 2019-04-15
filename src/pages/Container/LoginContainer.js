import React, { Component } from 'react'
import Login from '../Auth/Login';
import * as actions from '../../actions';
import { connect } from 'react-redux';


class LoginContainer extends Component {
    render() {
        return (
            <Login IsLogin = {this.props.IsLogin} isLogin = {this.props.isLogin}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    IsLogin: (bool) => dispatch(actions.isLogin(bool))
});

const mapStateToProps = (state) => ({
    isLogin: state.login.isLogin
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);