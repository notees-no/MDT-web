import { SET_AUTHENTICATED_USER, LOGOUT_USER } from '../types';

export const setAuthenticatedUser = (user) => ({
    type: SET_AUTHENTICATED_USER,
    payload: user
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});