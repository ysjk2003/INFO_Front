import * as types from './ActionTypes';

export const isLogin = (bool) => ({
    type: types.IS_LOGIN,
    isLogin: bool
})