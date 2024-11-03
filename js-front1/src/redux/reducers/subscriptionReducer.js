import { ADD_SUBSCRIPTION, DELETE_SUBSCRIPTION, UPDATE_SUBSCRIPTION, GET_SUBSCRIPTION } from '../types';

const initialState = {
    subscriptions: [
        { id: 1, name: "Ninja", category: "Gaming", followers: 18000000 },
        { id: 2, name: "Pokimane", category: "Just Chatting", followers: 9000000 },
        { id: 3, name: "Shroud", category: "FPS", followers: 10000000 },
        { id: 4, name: "IRL_Explorer", category: "IRL", followers: 500000 },
        { id: 5, name: "CookingMaster", category: "Food & Drink", followers: 2000000 }
    ]
};

export const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUBSCRIPTION:
            const newSubscription = {
                ...action.payload,
                id: state.subscriptions.reduce((prev, current) => {
                    return prev.id > current.id ? prev : current;
                }, { id: 0 }).id + 1
            };
            return {
                ...state,
                subscriptions: [...state.subscriptions, newSubscription]
            };

        case DELETE_SUBSCRIPTION:
            return {
                ...state,
                subscriptions: state.subscriptions.filter(sub => sub.id !== action.payload)
            };

        case UPDATE_SUBSCRIPTION:
            return {
                ...state,
                subscriptions: state.subscriptions.map(sub =>
                    sub.id === action.payload.id ? action.payload : sub
                )
            };

        case GET_SUBSCRIPTION:
            return {
                ...state,
                currentSubscription: state.subscriptions.find(sub => sub.id === action.payload)
            };

        default:
            return state;
    }
};