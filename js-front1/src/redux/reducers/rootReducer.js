import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { subscriptionReducer } from './subscriptionReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    subscriptions: subscriptionReducer
});