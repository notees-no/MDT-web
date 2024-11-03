import { ADD_SUBSCRIPTION, DELETE_SUBSCRIPTION, UPDATE_SUBSCRIPTION, GET_SUBSCRIPTION } from '../types';

export const addSubscription = (subscription) => ({
    type: ADD_SUBSCRIPTION,
    payload: subscription
});

export const deleteSubscription = (id) => ({
    type: DELETE_SUBSCRIPTION,
    payload: id
});

export const updateSubscription = (subscription) => ({
    type: UPDATE_SUBSCRIPTION,
    payload: subscription
});

export const getSubscription = (id) => ({
    type: GET_SUBSCRIPTION,
    payload: id
});