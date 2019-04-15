import * as types from './ActionTypes';

export const isLogin = (bool) => ({
    type: types.IS_LOGIN,
    isLogin: bool
})

export const subject = (subject) => ({
    type: types.SUBJECT,
    subject: subject
})