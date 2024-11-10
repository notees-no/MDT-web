import { SET_USERS } from '../types';

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});