import store from './state';

/* -- ACTIONS -- */
const LOG_SCALING = "LOG_SCALING";

/* -- INITIAL STATE -- */
const initialState = {
    scaling: 1
}

/* -- ACTION CREATORS -- */
export function logScaling() {
    return {
        type: LOG_SCALING
    }
}

/* -- REDUX REDUCER -- */
const timelineReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_SCALING:
            console.log('scaling is: ', state.scaling);
            return state;
        default:
            return state;
    }
}

export default timelineReducer;
