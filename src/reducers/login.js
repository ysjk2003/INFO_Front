import * as types from '../actions/ActionTypes';

const initialState = {
    isLogin: false,
    id: '',
    password: ''
};

const isLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.IS_LOGIN:
            return {
                ...state,
                isLogin: action.isLogin
            }
        default:
            return state;
    }
}

export default isLogin;