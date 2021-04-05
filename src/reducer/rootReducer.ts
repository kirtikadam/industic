import { combineReducers } from 'redux';
import { counterReducer } from '../reducer/incrementReducer';

const rootReducer = combineReducers({
    counterReducer
});

export default rootReducer;



