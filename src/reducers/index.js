import login from './login';
import subject from './posting';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    login,
    subject
})

export default reducers;