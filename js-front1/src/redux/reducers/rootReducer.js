import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { subscriptionReducer } from './subscriptionReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    subscriptions: subscriptionReducer,
    users: userReducer,
});