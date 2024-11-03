import { SET_AUTHENTICATED_USER, LOGOUT_USER } from '../types';

const initialState = {
    authenticatedUser: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED_USER:
            return {
                ...state,
                authenticatedUser: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                authenticatedUser: null
            };
        default:
            return state;
    }
};