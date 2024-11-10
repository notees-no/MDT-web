import { SET_USERS } from '../types';

const initialState = {
    users: [
        { id: 1, username: 'user', password: '123' },
        { id: 2, username: 'admin', password: '123' },
        { id: 3, username: '1', password: '1' },
    ],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};