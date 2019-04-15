import * as types from '../actions/ActionTypes';

const initialState = {
    subject: null
}

const subject = (state = initialState, action) => {
    switch(action.type){
        case types.SUBJECT:
            return {
                subject: action.subject
            };
        default:
            return state;
    }
}

export default subject;