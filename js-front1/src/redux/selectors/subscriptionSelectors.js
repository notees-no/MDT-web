export const getAllSubscriptions = (state) => state.subscriptions.subscriptions;
export const getSubscriptionById = (state, id) =>
    state.subscriptions.subscriptions.find(sub => sub.id === id);