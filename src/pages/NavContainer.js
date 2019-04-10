import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class NavContainer extends Component {
    render() {
        return (
            <Nav login = {this.props.isLogin}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin : state.isLogin
})

export default connect(mapStateToProps)(NavContainer)