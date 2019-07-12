import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from '../component/Main/Nav'
import * as actions from '../actions'
import { deleteCookie } from '../lib/cookie'
import { withRouter } from 'react-router-dom';

class NavContainer extends Component {
    state={
        isLogin: false
    }

    componentWillMount() {
        this.setState({
            isLogin: localStorage.getItem('isLogin')
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.login !== prevProps.login) {
            this.setState({
                isLogin: this.props.login
            })
        }
        if(this.state.isLogin !== prevState.isLogin) {
            this.setState({
                isLogin: this.state.isLogin
            })
        }
    }
    

    logout = () => {
        this.props.IsLogin(false);
        localStorage.clear();
        this.setState({
            isLogin : false
        })
        deleteCookie('JWT');
        alert("로그아웃되었습니다.")
        this.props.history.push('/')
    }

    render() {
        return (
            <Nav logout={this.logout} isLogin = {this.props.isLogin}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    IsLogin: (bool) => dispatch(actions.isLogin(bool))
});

const mapStateToProps = (state) => ({
    isLogin : state.login.isLogin
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer))