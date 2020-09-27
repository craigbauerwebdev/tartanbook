import { combineReducers } from 'redux';

const vendorsReducer = (state = null, action) => {
    if (action.type === 'FETCH_VENDORS') {
        return action.payload
    }
    return state;
}

export default combineReducers({
    vendors: vendorsReducer,
    dummYReducer: () => 9
});